import type { Rarity } from '../types';
import { CHARACTERS } from './roster';

/**
 * Static, content-authored definition of a character — immutable game data.
 * The player's mutable, per-character progress lives separately in
 * `OwnedCharacter` (see `state/gameState.ts`).
 */
export interface CharacterDef {
    /**
     * Stable unique id, referenced by save data. Never change once shipped,
     * or existing players' saves will lose this character.
     */
    id: string;
    /** Display name. */
    name: string;
    /** The drink of origin that defines the character (GDD §4). */
    drink: string;
    rarity: Rarity;
    /**
     * Caffeine Value — how much this character contributes to The Brew's
     * Caffeine Gauge (GDD §7B). Roughly tracks the drink's real stimulant
     * intensity; broadly correlates with rarity, but not always.
     */
    caffeine: number;
    /** Base combat stats at level 1. */
    baseStats: { hp: number; atk: number };
    /** Short flavour line for the roster / profile UI. */
    tagline?: string;
}

/** Lookup index, built once from the seed roster. */
const BY_ID = new Map<string, CharacterDef>(
    CHARACTERS.map((c) => [c.id, c]),
);

/** Returns the character definition for an id, or `undefined` if unknown. */
export function getCharacter(id: string): CharacterDef | undefined {
    return BY_ID.get(id);
}

/** All character definitions (the full roster of content). */
export function allCharacters(): readonly CharacterDef[] {
    return CHARACTERS;
}
