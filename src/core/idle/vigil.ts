import type { GameState } from '../state/gameState';
import { getCharacter } from '../content/characters';
import { evaluateTeam } from '../brew/caffeine';

/**
 * The Vigil — idle Dreamsand accumulation (GDD §6).
 *
 * The team holds watch and generates Dreamsand at a steady rate driven by its
 * combat power and its Caffeine-Gauge zone (the Phase 2 modifier feeds straight
 * in here). Earnings collect in `state.heldDreamsand` until the player claims
 * them. The same maths runs whether the player is online (ticking live) or
 * returning after time away (offline catch-up), with a soft cap on how much
 * unattended time counts.
 *
 * All numbers below are FIRST-PASS PLACEHOLDERS, tuned to the seed roster and a
 * team of four — balance later. Pure logic: no engine/React imports, and no RNG
 * so offline accumulation is deterministic and replayable.
 */

/** How much a unit of HP contributes to combat power, relative to attack. */
const HP_TO_POWER = 0.1;

/** Dreamsand generated per point of (zone-adjusted) team power, per second. */
const DREAMSAND_PER_POWER_PER_SEC = 0.01;

/**
 * Extra rate the Balanced sweet spot grants ("possible bonus rewards", GDD §7B).
 * This is what makes Balanced worth aiming for: it matches Overstimulated's raw
 * efficiency but without the volatility, so the steady zone is the safe optimum.
 */
const BALANCED_BONUS = 1.15;

/** Soft cap on unattended time that counts toward offline earnings (GDD §6: "e.g. 12–24h"). */
export const OFFLINE_CAP_HOURS = 12;
const OFFLINE_CAP_SEC = OFFLINE_CAP_HOURS * 3600;

/** Combat power of one character at a given level. */
function characterPower(atk: number, hp: number, level: number): number {
    return (atk + hp * HP_TO_POWER) * level;
}

/** Combined combat power of the active team (0 when the team is empty). */
export function teamPower(state: GameState): number {
    const levelOf = new Map(state.roster.map((c) => [c.id, c.level]));
    return state.team.reduce((sum, id) => {
        const def = getCharacter(id);
        if (!def) return sum;
        return sum + characterPower(def.baseStats.atk, def.baseStats.hp, levelOf.get(id) ?? 1);
    }, 0);
}

/**
 * Dreamsand generated per second by the current team, including its Caffeine
 * zone. Volatility (Overstimulated's "higher highs and lower lows") is reserved
 * for later combat systems — offline accrual stays on the deterministic mean.
 */
export function dreamsandRatePerSec(state: GameState): number {
    const { effect } = evaluateTeam(state.team);
    const zoneMult = effect.combatEfficiency * (effect.bonusRewards ? BALANCED_BONUS : 1);
    return teamPower(state) * DREAMSAND_PER_POWER_PER_SEC * zoneMult;
}

/** Convenience: Dreamsand per minute, for display. */
export function dreamsandRatePerMin(state: GameState): number {
    return dreamsandRatePerSec(state) * 60;
}

/** Elapsed seconds since the last settle, clamped to [0, offline cap]. */
function elapsedSinceLastSeen(state: GameState, nowMs: number): { sec: number; capped: boolean } {
    const raw = Math.max(0, (nowMs - state.lastSeen) / 1000);
    return { sec: Math.min(raw, OFFLINE_CAP_SEC), capped: raw > OFFLINE_CAP_SEC };
}

/**
 * The Dreamsand the player would have waiting right now, without mutating state.
 * Use this for live display (held pool + what has accrued since `lastSeen`).
 */
export function currentHeld(state: GameState, nowMs: number): number {
    const { sec } = elapsedSinceLastSeen(state, nowMs);
    return state.heldDreamsand + dreamsandRatePerSec(state) * sec;
}

/** Summary of an accrual step, for the UI's "while you were away" message. */
export interface AccrualResult {
    /** Dreamsand banked into the held pool by this settle. */
    earned: number;
    /** Seconds counted (already clamped to the offline cap). */
    elapsedSec: number;
    /** True if real elapsed time exceeded the cap (some time was forfeited). */
    capped: boolean;
}

/**
 * Banks everything accrued since `lastSeen` into the held pool at the *current*
 * rate, then resets the clock to `nowMs`. Call this before any change that alters
 * the rate (e.g. editing the team) so elapsed time is credited at the rate that
 * actually applied during it. Mutates `state`.
 */
export function settle(state: GameState, nowMs: number): AccrualResult {
    const { sec, capped } = elapsedSinceLastSeen(state, nowMs);
    const earned = dreamsandRatePerSec(state) * sec;
    state.heldDreamsand += earned;
    state.lastSeen = nowMs;
    return { earned, elapsedSec: sec, capped };
}

/**
 * Settles, then moves the held Dreamsand into the spendable balance. Returns the
 * whole-number amount claimed (fractional remainder stays held). Mutates `state`.
 */
export function claimDreamsand(state: GameState, nowMs: number): number {
    settle(state, nowMs);
    const claimable = Math.floor(state.heldDreamsand);
    state.currencies.dreamsand += claimable;
    state.heldDreamsand -= claimable;
    return claimable;
}
