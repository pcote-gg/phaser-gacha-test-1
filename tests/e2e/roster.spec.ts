import { test, expect } from '@playwright/test';
import { seed, open, navTo } from './helpers';

/**
 * The Awake / roster (GDD §6 daily loop + Character Progression): spend Dreamsand
 * to raise a character's level, gated by cost and the rarity level cap. A Common
 * character costs 25 × current level to level up and caps at level 30.
 */

test('levelling up raises the level and spends the Dreamsand cost', async ({ page }) => {
    await seed(page, { roster: [{ id: 'chamomile', level: 1 }], dreamsand: 100 });
    await open(page);
    await navTo(page, 'roster');

    await expect(page.getByTestId('roster-dreamsand')).toContainText('100');
    await expect(page.getByTestId('roster-level-chamomile')).toHaveText('1');

    await page.getByTestId('roster-levelup-chamomile').click(); // costs 25 × 1 = 25

    await expect(page.getByTestId('roster-level-chamomile')).toHaveText('2');
    await expect(page.getByTestId('roster-dreamsand')).toContainText('75');
});

test('the level-up button is disabled without enough Dreamsand', async ({ page }) => {
    await seed(page, { roster: [{ id: 'chamomile', level: 1 }], dreamsand: 10 });
    await open(page);
    await navTo(page, 'roster');

    // Cost is 25 but only 10 Dreamsand is banked.
    await expect(page.getByTestId('roster-levelup-chamomile')).toBeDisabled();
});

test('a character at its rarity cap shows as Maxed', async ({ page }) => {
    // Common level cap is 30.
    await seed(page, { roster: [{ id: 'chamomile', level: 30 }], dreamsand: 9999 });
    await open(page);
    await navTo(page, 'roster');

    const button = page.getByTestId('roster-levelup-chamomile');
    await expect(button).toBeDisabled();
    await expect(button).toHaveText(/Maxed/);
});