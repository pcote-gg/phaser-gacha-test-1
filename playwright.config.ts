import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright end-to-end config for Reverie Vigil.
 *
 * Tests drive the real game in a Chromium browser against the Vite dev server.
 * `webServer` boots `npm run dev` automatically and waits for port 8080 before
 * the suite runs, so a single `npm run test:e2e` is all that's needed — no
 * manual server juggling. Locally it reuses a dev server you already have open;
 * in CI it always starts a fresh one.
 *
 * The game renders combat to a Phaser <canvas>, which the DOM can't see into, so
 * these tests assert on the React UI layer (menus, gacha, roster, currencies)
 * and capture screenshots for visual review. See tests/e2e/README.md.
 */
export default defineConfig({
    testDir: './tests/e2e',
    // Each spec file runs in parallel; tests within a file are isolated by a
    // fresh browser context (so localStorage saves never leak between them).
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',

    use: {
        baseURL: 'http://localhost:8080',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],

    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:8080',
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
    },
});