/**
 * Shared domain types for Reverie Vigil's core logic.
 * Pure data — no engine or rendering imports allowed in this folder.
 */

/** The five rarity tiers, from most common to rarest (see GDD §4). */
export type Rarity = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';

/** Rarity tiers ordered from lowest to highest. */
export const RARITY_ORDER: Rarity[] = [
    'common',
    'rare',
    'epic',
    'legendary',
    'mythic',
];

/**
 * Base level cap per rarity tier (GDD §"Character Progression": higher rarity =
 * higher ceiling). Ascension raising these caps is post-MVP.
 */
export const RARITY_LEVEL_CAP: Record<Rarity, number> = {
    common: 30,
    rare: 40,
    epic: 50,
    legendary: 60,
    mythic: 70,
};
