import { test, expect } from '@playwright/test';
import { seed, open, navTo } from './helpers';

/**
 * The Brew (GDD §7B): assemble a team from the owned roster and watch the
 * Caffeine Gauge move between zones. Caffeine values are content constants
 * (matcha 56, cortado 68, drip 34…) and the Balanced band is 100–220, so the
 * resulting zone is fully deterministic.
 */

test('adding characters fills team slots and drives the Caffeine zone', async ({ page }) => {
    await seed(page, { roster: [{ id: 'matcha', level: 1 }, { id: 'cortado', level: 1 }] });
    await open(page);
    await navTo(page, 'brew');

    // Empty team → 0 caffeine → Drowsy.
    await expect(page.getByTestId('brew-zone')).toHaveText('Drowsy');
    await expect(page.getByTestId('brew-caffeine')).toHaveText('0 caffeine');

    await page.getByTestId('brew-card-matcha').click(); // 56 → still Drowsy (<100)
    await expect(page.getByTestId('brew-zone')).toHaveText('Drowsy');
    await expect(page.getByTestId('brew-slot-0')).toContainText('Matcha');

    await page.getByTestId('brew-card-cortado').click(); // +68 = 124 → Balanced
    await expect(page.getByTestId('brew-caffeine')).toHaveText('124 caffeine');
    await expect(page.getByTestId('brew-zone')).toHaveText('Balanced');
});

test('the team caps at four; a filled slot can be cleared to make room', async ({ page }) => {
    await seed(page, {
        roster: [
            { id: 'chamomile', level: 1 },
            { id: 'peppermint', level: 1 },
            { id: 'rooibos', level: 1 },
            { id: 'drip', level: 1 },
            { id: 'earl-grey', level: 1 },
        ],
    });
    await open(page);
    await navTo(page, 'brew');

    for (const id of ['chamomile', 'peppermint', 'rooibos', 'drip']) {
        await page.getByTestId(`brew-card-${id}`).click();
    }
    // Team full (4) → the fifth character can't be added.
    await expect(page.getByTestId('brew-card-earl-grey')).toBeDisabled();

    // Remove one via its team slot, and the fifth becomes addable again.
    await page.getByTestId('brew-slot-0').click();
    await expect(page.getByTestId('brew-card-earl-grey')).toBeEnabled();
});