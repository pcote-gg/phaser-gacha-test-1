import { test, expect } from '@playwright/test';
import { seed, open, navTo, readNumber } from './helpers';

/**
 * The Banner / gacha loop (GDD §9): spend Tolls to pull characters into the
 * roster, with the dev "+10 Tolls" grant standing in until Tolls are earnable.
 * The drawn character is RNG, so these tests assert on what's deterministic —
 * Tolls spent and roster growth — not on which character lands.
 */

test('pull buttons are disabled with no Tolls, and the dev grant enables them', async ({ page }) => {
    await open(page); // fresh game: 0 Tolls
    await navTo(page, 'gacha');

    await expect(page.getByTestId('gacha-tolls')).toHaveText('0');
    await expect(page.getByTestId('gacha-ring-1')).toBeDisabled();
    await expect(page.getByTestId('gacha-ring-10')).toBeDisabled();

    await page.getByTestId('gacha-grant').click(); // +10 Tolls
    await expect(page.getByTestId('gacha-tolls')).toHaveText('10');
    await expect(page.getByTestId('gacha-ring-1')).toBeEnabled();
    await expect(page.getByTestId('gacha-ring-10')).toBeEnabled();
});

test('a single pull spends one Toll and adds one character to the roster', async ({ page }) => {
    await seed(page, { tolls: 10 });
    await open(page);
    await navTo(page, 'gacha');

    await expect(page.getByTestId('gacha-roster')).toHaveText('0');
    await page.getByTestId('gacha-ring-1').click();

    await expect(page.getByTestId('gacha-tolls')).toHaveText('9');
    // Roster was empty, so the first pull is always a new character.
    await expect(page.getByTestId('gacha-roster')).toHaveText('1');
    await expect(page.getByTestId('gacha-results').locator('li')).toHaveCount(1);
});

test('a ten-pull spends ten Tolls and shows ten results', async ({ page }) => {
    await seed(page, { tolls: 10 });
    await open(page);
    await navTo(page, 'gacha');

    await page.getByTestId('gacha-ring-10').click();

    await expect(page.getByTestId('gacha-tolls')).toHaveText('0');
    await expect(page.getByTestId('gacha-results').locator('li')).toHaveCount(10);
    // Duplicates convert to Flicker, so the roster grows by between 1 and 10.
    const roster = await readNumber(page, 'gacha-roster');
    expect(roster).toBeGreaterThanOrEqual(1);
    expect(roster).toBeLessThanOrEqual(10);
    // Out of Tolls again → buttons re-disable.
    await expect(page.getByTestId('gacha-ring-1')).toBeDisabled();
});