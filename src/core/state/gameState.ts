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
    /** Every character the player owns. */
    roster: OwnedCharacter[];
    /** Active team for The Brew — ids referencing owned characters (GDD §7B). */
    team: string[];
    /** Epoch ms of the last save; used later for offline accumulation. */
    lastSeen: number;
}

/** Current save schema version. */
export const SAVE_VERSION = 1;

/** Creates a fresh game state for a brand-new player. */
export function newGame(): GameState {
    return {
        version: SAVE_VERSION,
        currencies: { dreamsand: 0, tolls: 0 },
        roster: [],
        team: [],
        lastSeen: Date.now(),
    };
}
