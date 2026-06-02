import type { Rarity } from '../types';

/**
 * The player's save game — the single source of truth for all mutable progress.
 * Presentation layers (Phaser, React) read from and write to this; they never
 * own game state themselves.
 */

/** A character the player owns, plus their per-character progress. */
export interface OwnedCharacter {
    /** References `CharacterDef.id`. Unique within the roster (duplicates from
     * gacha convert to Flicker rather than a second entry — GDD §9). */
    id: string;
    /** Current level (1 .. the rarity's level cap). */
    level: number;
}

/** The complete persisted game state. */
export interface GameState {
    /** Save schema version — bump when this shape changes, to drive migrations. */
    version: number;
    currencies: {
        /** Primary idle resource, accumulated by the team (GDD §6). */
        dreamsand: number;
        /** Gacha pull currency (GDD §9). */
        tolls: number;
    };
    /**
     * Dreamsand earned by The Vigil but not yet claimed — accrues while the team
     * holds watch (online and offline) and banks into `currencies.dreamsand` on
     * claim (GDD §6 idle/offline accumulation).
     */
    heldDreamsand: number;
    /** Duplicate-conversion currency, held per rarity tier (GDD §9). */
    flicker: Record<Rarity, number>;
    /** Every character the player owns. */
    roster: OwnedCharacter[];
    /** Active team for The Brew — ids referencing owned characters (GDD §7B). */
    team: string[];
    /** Ids of Dream Fragments the player has finished, for one-time rewards (GDD §7A). */
    completedFragments: string[];
    /**
     * Gacha pity counters, keyed by a banner's `pityGroup` so they carry over
     * between banners of the same type (GDD §9).
     */
    pity: Record<string, number>;
    /** Epoch ms of the last save; used later for offline accumulation. */
    lastSeen: number;
}

/** Current save schema version. */
export const SAVE_VERSION = 4;

/** A zeroed Flicker wallet (one bucket per rarity). */
function emptyFlicker(): Record<Rarity, number> {
    return { common: 0, rare: 0, epic: 0, legendary: 0, mythic: 0 };
}

/** Creates a fresh game state for a brand-new player. */
export function newGame(): GameState {
    return {
        version: SAVE_VERSION,
        currencies: { dreamsand: 0, tolls: 0 },
        heldDreamsand: 0,
        flicker: emptyFlicker(),
        roster: [],
        team: [],
        completedFragments: [],
        pity: {},
        lastSeen: Date.now(),
    };
}
