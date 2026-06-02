import { getCharacter } from '../content/characters';

/**
 * The Caffeine Gauge — the mechanical heart of The Brew (GDD §7B).
 *
 * A team's combined Caffeine Value lands in one of three zones. The thresholds
 * and effect numbers below are FIRST-PASS PLACEHOLDERS, tuned to the current
 * seed roster (caffeine 3–92) and a team of four; they are meant to be balanced
 * later. Keep them here so balancing never requires touching the UI.
 *
 * Pure data and math — no engine or React imports allowed in `core/`.
 */

/** Number of active team slots in The Brew. Design constant (GDD silent — set to 4). */
export const TEAM_SIZE = 4;

/** The three Caffeine Gauge zones, from too-low to too-high. */
export type CaffeineZone = 'drowsy' | 'balanced' | 'overstimulated';

/**
 * Zone boundaries by total team Caffeine Value:
 *   total <  balancedMin            → Drowsy
 *   balancedMin ≤ total ≤ balancedMax → Balanced (the sweet-spot range)
 *   total >  balancedMax            → Overstimulated
 *
 * The target is a *range*, not a number — there is always room to maneuver.
 */
export const CAFFEINE_THRESHOLDS = {
    balancedMin: 100,
    balancedMax: 220,
} as const;

/**
 * What a zone does to the team. Phase 3's idle auto-battle will read these;
 * Phase 2 only displays them.
 */
export interface ZoneEffect {
    /** Multiplier on idle combat output. */
    combatEfficiency: number;
    /** 0 = steady output; >0 adds variance ("higher highs and lower lows"). */
    volatility: number;
    /** Whether the Balanced sweet-spot bonus rewards apply. */
    bonusRewards: boolean;
}

/** Zone → effect mapping. Placeholder values — see file header. */
export const ZONE_EFFECTS: Record<CaffeineZone, ZoneEffect> = {
    drowsy: { combatEfficiency: 0.7, volatility: 0, bonusRewards: false },
    balanced: { combatEfficiency: 1.0, volatility: 0, bonusRewards: true },
    overstimulated: { combatEfficiency: 1.15, volatility: 0.4, bonusRewards: false },
};

/**
 * Sum of the Caffeine Values of the characters in a team. Unknown ids (e.g. a
 * member that is no longer in the roster) contribute 0 rather than throwing.
 */
export function teamCaffeine(teamIds: readonly string[]): number {
    return teamIds.reduce((sum, id) => sum + (getCharacter(id)?.caffeine ?? 0), 0);
}

/** Classifies a total Caffeine Value into its gauge zone. */
export function caffeineZone(total: number): CaffeineZone {
    if (total < CAFFEINE_THRESHOLDS.balancedMin) return 'drowsy';
    if (total > CAFFEINE_THRESHOLDS.balancedMax) return 'overstimulated';
    return 'balanced';
}

/** A team's full Caffeine Gauge reading. */
export interface BrewEvaluation {
    /** Combined Caffeine Value of the team. */
    total: number;
    zone: CaffeineZone;
    effect: ZoneEffect;
}

/** Evaluates a team: its combined caffeine, the resulting zone, and its effect. */
export function evaluateTeam(teamIds: readonly string[]): BrewEvaluation {
    const total = teamCaffeine(teamIds);
    const zone = caffeineZone(total);
    return { total, zone, effect: ZONE_EFFECTS[zone] };
}
