/**
 * Random number source for gacha logic. Pulls take an `RNG` so the math stays
 * pure and deterministic when seeded — the game passes `Math.random`, tests can
 * pass a seeded generator.
 */

/** A function returning a float in [0, 1), like `Math.random`. */
export type RNG = () => number;

/**
 * Deterministic, seedable generator (mulberry32). Same seed → same sequence,
 * which makes pity/rate behaviour reproducible for tests and debugging.
 */
export function mulberry32(seed: number): RNG {
    let a = seed >>> 0;
    return () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
