import type { Rarity } from '../types';
import type { GameState } from '../state/gameState';
import type { RNG } from './rng';
import type { BannerConfig } from './banner';
import { allCharacters } from '../content/characters';
import { TOLLS_PER_PULL, FLICKER_PER_DUPLICATE } from './banner';

/** The outcome of a single pull, after resolving it against the player's roster. */
export interface ResolvedDraw {
    characterId: string;
    rarity: Rarity;
    /** True if this was the first copy the player obtained. */
    isNew: boolean;
    /** Flicker gained when the draw was a duplicate (0 when new). */
    flicker: number;
}

/** The full result of a pull session (1 or more draws). */
export interface PullResult {
    draws: ResolvedDraw[];
    /** Total Flicker gained per rarity across this pull. */
    flickerGained: Partial<Record<Rarity, number>>;
    /** Tolls spent. */
    cost: number;
}

/** Total Toll cost for `count` pulls. */
export function pullCost(count: number): number {
    return count * TOLLS_PER_PULL;
}

/** Whether the player can afford `count` pulls. */
export function canPull(state: GameState, count: number): boolean {
    return state.currencies.tolls >= pullCost(count);
}

/**
 * Probability that a single pull yields the banner's pity rarity at a given
 * pity count: the base rate until soft pity, then a linear climb to a
 * guarantee at hard pity.
 */
function pityRarityChance(pity: number, banner: BannerConfig): number {
    if (pity >= banner.hardPity) return 1;
    const base = banner.baseRates[banner.pityRarity] ?? 0;
    if (pity < banner.softPity) return base;
    const span = banner.hardPity - banner.softPity;
    const progress = (pity - banner.softPity) / span; // 0 at soft pity, 1 at hard pity
    return base + (1 - base) * progress;
}

/** Picks a rarity among the non-pity rarities, weighted by their base rates. */
function rollNonPityRarity(banner: BannerConfig, rng: RNG): Rarity {
    const others = banner.rarities.filter((r) => r !== banner.pityRarity);
    const total = others.reduce((sum, r) => sum + (banner.baseRates[r] ?? 0), 0);
    let roll = rng() * total;
    for (const r of others) {
        roll -= banner.baseRates[r] ?? 0;
        if (roll < 0) return r;
    }
    return others[others.length - 1];
}

/** Uniformly picks a character id of the given rarity from the banner's pool. */
function pickCharacterId(rarity: Rarity, banner: BannerConfig, rng: RNG): string {
    const pool = allCharacters().filter(
        (c) => c.rarity === rarity && banner.rarities.includes(c.rarity),
    );
    // Banner content is expected to include at least one character per rarity.
    return pool[Math.floor(rng() * pool.length)].id;
}

/**
 * Performs `count` pulls on a banner, mutating `state`: spends Tolls, advances
 * pity (resetting when the pity rarity is hit), and either adds new characters
 * to the roster or converts duplicates to Flicker. Returns a per-draw summary
 * for the UI. Throws if the player cannot afford the pull.
 */
export function performPull(
    state: GameState,
    banner: BannerConfig,
    count: number,
    rng: RNG,
): PullResult {
    const cost = pullCost(count);
    if (state.currencies.tolls < cost) {
        throw new Error('Not enough Tolls to pull.');
    }
    state.currencies.tolls -= cost;

    let pity = state.pity[banner.pityGroup] ?? 0;
    const owned = new Set(state.roster.map((c) => c.id));
    const draws: ResolvedDraw[] = [];
    const flickerGained: Partial<Record<Rarity, number>> = {};

    for (let i = 0; i < count; i++) {
        pity++;
        let rarity: Rarity;
        if (rng() < pityRarityChance(pity, banner)) {
            rarity = banner.pityRarity;
            pity = 0; // hitting the pity rarity resets the counter
        } else {
            rarity = rollNonPityRarity(banner, rng);
        }

        const characterId = pickCharacterId(rarity, banner, rng);

        if (owned.has(characterId)) {
            const flicker = FLICKER_PER_DUPLICATE[rarity];
            state.flicker[rarity] += flicker;
            flickerGained[rarity] = (flickerGained[rarity] ?? 0) + flicker;
            draws.push({ characterId, rarity, isNew: false, flicker });
        } else {
            owned.add(characterId);
            state.roster.push({ id: characterId, level: 1 });
            draws.push({ characterId, rarity, isNew: true, flicker: 0 });
        }
    }

    state.pity[banner.pityGroup] = pity;
    return { draws, flickerGained, cost };
}
