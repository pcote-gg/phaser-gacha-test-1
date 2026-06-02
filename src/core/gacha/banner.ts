import type { Rarity } from '../types';

/** Definition of a gacha banner — what can be pulled and how pity behaves. */
export interface BannerConfig {
    id: string;
    name: string;
    /**
     * Pity counters are shared across banners with the same group, so pity
     * carries over between banners of the same type (GDD §9).
     */
    pityGroup: string;
    /** Rarities that can appear on this banner. */
    rarities: Rarity[];
    /** The top rarity, which pity works toward (guaranteed at hard pity). */
    pityRarity: Rarity;
    /** Base per-pull rate for each included rarity (should sum to ~1). */
    baseRates: Partial<Record<Rarity, number>>;
    /** Pull count at which the pity-rarity rate begins climbing. */
    softPity: number;
    /** Pull count that guarantees the pity rarity. */
    hardPity: number;
}

// --- Tunable economy constants (first-pass placeholders, balance later) ---

/** Tolls spent per single pull. */
export const TOLLS_PER_PULL = 1;

/** Flicker granted when a duplicate is pulled, by the duplicate's rarity. */
export const FLICKER_PER_DUPLICATE: Record<Rarity, number> = {
    common: 1,
    rare: 2,
    epic: 5,
    legendary: 10,
    mythic: 20,
};

/**
 * The always-available Standard banner (GDD §9): the full Common–Epic roster,
 * soft pity at 60, hard pity at 80 guaranteeing an Epic. Rates are placeholders
 * pending economy tuning.
 */
export const STANDARD_BANNER: BannerConfig = {
    id: 'standard',
    name: 'Standard — Ring the Bell',
    pityGroup: 'standard',
    rarities: ['common', 'rare', 'epic'],
    pityRarity: 'epic',
    baseRates: { common: 0.75, rare: 0.2, epic: 0.05 },
    softPity: 60,
    hardPity: 80,
};
