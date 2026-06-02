import { test, expect } from '@playwright/test';
import { open, navTo, type Screen } from './helpers';

/**
 * Smoke + navigation: the app boots, the Phaser canvas mounts, and every screen
 * is reachable from the nav. A screenshot of each screen is attached for visual
 * review (the canvas-backed combat can only be eyeballed, not asserted in DOM).
 */

const SCREENS: Screen[] = ['vigil', 'fragments', 'brew', 'roster', 'gacha'];

test('app boots with the Phaser canvas and the Vigil screen', async ({ page }) => {
    await open(page);
    // The Phaser game renders into a <canvas> under the React overlay.
    await expect(page.locator('canvas')).toBeVisible();
    await expect(page.getByTestId('screen-vigil')).toBeVisible();
});

test('every screen is reachable from the nav', async ({ page }) => {
    await open(page);
    for (const screen of SCREENS) {
        await navTo(page, screen);
        await expect(page.getByTestId(`screen-${screen}`)).toBeVisible();
        await page.screenshot({ path: `test-results/screens/${screen}.png`, fullPage: true });
    }
});