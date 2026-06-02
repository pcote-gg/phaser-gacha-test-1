import { type Page, expect } from '@playwright/test';

/**
 * Shared test helpers for the Reverie Vigil e2e suite.
 *
 * The game persists its entire save to localStorage under one key. Rather than
 * fight gacha RNG and the live idle timer to reach a given game state, tests
 * SEED that save directly before the app boots (`seed()` below). This is purely
 * test-side setup — it touches no game code — and makes every precondition
 * (owned roster, currency balances, held Dreamsand, completed fragments) exact
 * and deterministic.
 */

/** Must match SAVE_KEY in src/core/state/save.ts. */
const SAVE_KEY = 'reverie-vigil:save';
/** Must match SAVE_VERSION in src/core/state/gameState.ts. */
const SAVE_VERSION = 4;

export type Screen = 'vigil' | 'fragments' | 'brew' | 'roster' | 'gacha';

export interface OwnedCharacter {
    id: string;
    level: number;
}

/** The knobs a test cares about; everything else defaults to a fresh game. */
export interface SeedState {
    dreamsand?: number;
    tolls?: number;
    heldDreamsand?: number;
    roster?: OwnedCharacter[];
    team?: string[];
    completedFragments?: string[];
    pity?: Record<string, number>;
    /**
     * Milliseconds to backdate `lastSeen`, simulating time away. With a non-empty
     * team this drives offline Dreamsand accrual and the "while you were away"
     * banner. Defaults to 0 (lastSeen = load time → no offline gain).
     */
    awayMs?: number;
}

/**
 * Injects a crafted save into localStorage BEFORE the app's scripts run, so the
 * game loads straight into the desired state. `lastSeen` is stamped in the
 * browser at load time (Date.now() must be real there), optionally backdated by
 * `awayMs`. Call this before `open()`.
 *
 * NOTE: addInitScript re-runs on every navigation, so a `page.reload()` after
 * seeding will re-apply the seed. Tests that assert real persistence across a
 * reload must NOT seed — see persistence.spec.ts.
 */
export async function seed(page: Page, state: SeedState = {}): Promise<void> {
    const payload = {
        key: SAVE_KEY,
        version: SAVE_VERSION,
        dreamsand: state.dreamsand ?? 0,
        tolls: state.tolls ?? 0,
        heldDreamsand: state.heldDreamsand ?? 0,
        roster: state.roster ?? [],
        team: state.team ?? [],
        completedFragments: state.completedFragments ?? [],
        pity: state.pity ?? {},
        awayMs: state.awayMs ?? 0,
    };

    await page.addInitScript((p) => {
        const save = {
            version: p.version,
            currencies: { dreamsand: p.dreamsand, tolls: p.tolls },
            heldDreamsand: p.heldDreamsand,
            flicker: { common: 0, rare: 0, epic: 0, legendary: 0, mythic: 0 },
            roster: p.roster,
            team: p.team,
            completedFragments: p.completedFragments,
            pity: p.pity,
            lastSeen: Date.now() - p.awayMs,
        };
        localStorage.setItem(p.key, JSON.stringify(save));
    }, payload);
}

/** Navigates to the app and waits for the React UI (default Vigil screen) to mount. */
export async function open(page: Page): Promise<void> {
    await page.goto('/');
    await expect(page.getByTestId('screen-vigil')).toBeVisible();
}

/** Switches to a screen via its nav button and waits for it to render. */
export async function navTo(page: Page, screen: Screen): Promise<void> {
    await page.getByTestId(`nav-${screen}`).click();
    await expect(page.getByTestId(`screen-${screen}`)).toBeVisible();
}

/** Reads a numeric readout (e.g. a currency or level) from a test-id'd element. */
export async function readNumber(page: Page, testId: string): Promise<number> {
    const text = (await page.getByTestId(testId).innerText()).replace(/[^\d.-]/g, '');
    return Number(text);
}