import { test, expect } from '@playwright/test';
import { seed, open } from './helpers';

/**
 * The Vigil (GDD §6): the idle loop. Held Dreamsand accrues while a team holds
 * watch and banks into the spendable balance on claim. Seeding an empty team
 * with a fixed held pool makes the claim exact (an empty team earns at rate 0,
 * so the held value never drifts mid-test).
 */

test('claiming banks held Dreamsand into the spendable balance', async ({ page }) => {
    await seed(page, { heldDreamsand: 500 }); // empty team → held stays put
    await open(page); // Vigil is the default screen

    await expect(page.getByTestId('vigil-held')).toHaveText('500');
    await expect(page.getByTestId('vigil-banked')).toHaveText('0');

    await page.getByTestId('vigil-claim').click();

    await expect(page.getByTestId('vigil-held')).toHaveText('0');
    await expect(page.getByTestId('vigil-banked')).toHaveText('500');
});

test('the claim button is disabled when nothing has accrued', async ({ page }) => {
    await seed(page, { heldDreamsand: 0 });
    await open(page);

    await expect(page.getByTestId('vigil-claim')).toBeDisabled();
    await expect(page.getByTestId('vigil-claim')).toHaveText(/Nothing to claim/);
});

test('returning after time away shows the "while you were away" banner', async ({ page }) => {
    // A team on watch for two hours accrues offline Dreamsand → banner appears.
    await seed(page, {
        roster: [{ id: 'drip', level: 1 }],
        team: ['drip'],
        awayMs: 2 * 60 * 60 * 1000,
    });
    await open(page);

    const banner = page.getByTestId('vigil-away');
    await expect(banner).toBeVisible();

    await page.getByTestId('vigil-away-dismiss').click();
    await expect(banner).toBeHidden();
});