import type { CharacterDef } from '../content/characters';
import { getCharacter } from '../content/characters';
import type { GameState } from '../state/gameState';
import { RARITY_LEVEL_CAP } from '../types';
import type { Rarity } from '../types';

/**
 * Character upgrades — spending Dreamsand to raise a character's level (GDD §6
 * daily loop: "Spend resources on character upgrades"; §"Character Progression":
 * levels grant stat increases up to a rarity-gated cap).
 *
 * Levelling is the sink that closes the core loop: The Vigil earns Dreamsand,
 * Dreamsand buys levels, levels raise team power, and higher power earns
 * Dreamsand faster. Breaking *through* the rarity cap (ascension) is post-MVP —
 * here a character simply stops at `RARITY_LEVEL_CAP[rarity]`.
 *
 * Pure logic: no engine/React imports, no RNG. All numbers below are FIRST-PASS
 * PLACEHOLDERS tuned to the seed roster — balance later.
 */

/**
 * Base Dreamsand cost for a single level-up, scaled by rarity. The actual cost
 * of going from level L to L+1 is this base times L, so early levels are cheap
 * and maxing out a character is a meaningful (but achievable) investment.
 */
const LEVEL_COST_BASE: Record<Rarity, number> = {
    common: 25,
    rare: 45,
    epic: 80,
    legendary: 140,
    mythic: 240,
};

/** The highest level a character of this rarity can reach (no ascension at MVP). */
export function levelCap(rarity: Rarity): number {
    return RARITY_LEVEL_CAP[rarity];
}

/** True when the character has reached its rarity's level ceiling. */
export function isAtLevelCap(def: CharacterDef, level: number): boolean {
    return level >= levelCap(def.rarity);
}

/**
 * Dreamsand cost to raise a character of `rarity` from `fromLevel` to the next
 * level. Grows linearly with the current level (see LEVEL_COST_BASE).
 */
export function levelUpCost(rarity: Rarity, fromLevel: number): number {
    return LEVEL_COST_BASE[rarity] * fromLevel;
}

/**
 * A character's stats at a given level. Stats scale linearly with level, which
 * mirrors how combat power scales in The Vigil (see `idle/vigil.ts`), so the
 * numbers shown in the roster line up with the idle rate the player feels.
 */
export function effectiveStats(def: CharacterDef, level: number): { hp: number; atk: number } {
    return {
        hp: Math.round(def.baseStats.hp * level),
        atk: Math.round(def.baseStats.atk * level),
    };
}

/** Why a level-up can't happen right now (for disabling/explaining the button). */
export type LevelUpBlock = 'not-owned' | 'at-cap' | 'insufficient-dreamsand';

/** A level-up's feasibility plus the context the UI needs to render the action. */
export interface LevelUpQuote {
    /** Whether the player can level this character up right now. */
    ok: boolean;
    /** Present when `ok` is false — why it's blocked. */
    block?: LevelUpBlock;
    /** The owned character's current level (0 if not owned). */
    level: number;
    /** This rarity's level ceiling. */
    cap: number;
    /** Dreamsand cost of the next level (undefined when already at cap). */
    cost?: number;
}

/**
 * Inspects whether `characterId` can be levelled up, without mutating anything.
 * Drives the roster UI: the button's enabled state, the cost label, and the
 * "Maxed" / "Need more Dreamsand" messaging.
 */
export function quoteLevelUp(state: GameState, characterId: string): LevelUpQuote {
    const owned = state.roster.find((c) => c.id === characterId);
    const def = getCharacter(characterId);
    if (!owned || !def) {
        return { ok: false, block: 'not-owned', level: 0, cap: 0 };
    }

    const cap = levelCap(def.rarity);
    if (owned.level >= cap) {
        return { ok: false, block: 'at-cap', level: owned.level, cap };
    }

    const cost = levelUpCost(def.rarity, owned.level);
    if (state.currencies.dreamsand < cost) {
        return { ok: false, block: 'insufficient-dreamsand', level: owned.level, cap, cost };
    }

    return { ok: true, level: owned.level, cap, cost };
}

/** The result of a successful level-up. */
export interface LevelUpResult {
    /** The character's new level after the upgrade. */
    level: number;
    /** Dreamsand spent. */
    cost: number;
}

/**
 * Spends Dreamsand to raise a character one level, mutating `state`. Guards
 * against levelling an unowned or maxed character, or one the player can't
 * afford — throws in those cases (the UI gates with `quoteLevelUp` first, so a
 * throw here means a logic error, not normal play).
 */
export function levelUpCharacter(state: GameState, characterId: string): LevelUpResult {
    const quote = quoteLevelUp(state, characterId);
    if (!quote.ok) {
        throw new Error(`Cannot level up "${characterId}": ${quote.block}`);
    }

    const owned = state.roster.find((c) => c.id === characterId)!;
    const cost = quote.cost!;
    state.currencies.dreamsand -= cost;
    owned.level += 1;
    return { level: owned.level, cost };
}