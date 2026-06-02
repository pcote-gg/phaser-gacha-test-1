import { test, expect } from '@playwright/test';
import { open, navTo } from './helpers';

/**
 * Save persistence (the architecture's localStorage save slot): progress made in
 * a session survives a page reload. These tests deliberately DO NOT seed — they
 * start from a fresh game and let the app write the real save, then reload to
 * confirm the save is read back. (Seeding re-injects on every load, which would
 * mask a broken save round-trip.)
 */

test('a gacha pull survives a page reload', async ({ page }) => {
    await open(page); // fresh game
    await navTo(page, 'gacha');

    await page.getByTestId('gacha-grant').click(); // +10 Tolls
    await page.getByTestId('gacha-ring-1').click(); // spend 1, gain 1 character
    await expect(page.getByTestId('gacha-tolls')).toHaveText('9');
    await expect(page.getByTestId('gacha-roster')).toHaveText('1');

    await page.reload();
    await navTo(page, 'gacha');

    // State was read back from the save, not reset.
    await expect(page.getByTestId('gacha-tolls')).toHaveText('9');
    await expect(page.getByTestId('gacha-roster')).toHaveText('1');
});