import { test, expect, type Page } from '@playwright/test';
import { seed, open, navTo } from './helpers';

/**
 * Dream Fragments (GDD §7A): the visual-novel episodes. Walking one to the end
 * grants its one-time reward (the seed fragment "emergence-chamomile" gives
 * +2 Tolls and +100 Dreamsand); replaying a completed fragment grants nothing.
 */

const FRAGMENT_ID = 'emergence-chamomile';

/** Taps through a fragment to its end, handling line beats and the choice beat. */
async function walkToEnd(page: Page): Promise<void> {
    for (let i = 0; i < 40; i++) {
        if (
            (await page.getByTestId('reader-reward').isVisible()) ||
            (await page.getByTestId('reader-reward-none').isVisible())
        ) {
            return;
        }
        if (await page.getByTestId('reader-choice-0').isVisible()) {
            await page.getByTestId('reader-choice-0').click();
        } else if (await page.getByTestId('reader-response').isVisible()) {
            await page.getByTestId('reader-response').click();
        } else if (await page.getByTestId('reader-line').isVisible()) {
            await page.getByTestId('reader-line').click();
        }
    }
    throw new Error('Fragment did not reach its completion card within 40 taps');
}

test('completing a fragment grants its one-time reward and persists it', async ({ page }) => {
    await open(page); // fresh game
    await navTo(page, 'fragments');

    await page.getByTestId(`frag-begin-${FRAGMENT_ID}`).click();
    await walkToEnd(page);

    // Reward card: +2 Tolls · +100 Dreamsand.
    const reward = page.getByTestId('reader-reward');
    await expect(reward).toBeVisible();
    await expect(reward).toContainText('+2');
    await expect(reward).toContainText('+100');

    await page.getByTestId('reader-exit').click();
    await expect(page.getByTestId(`frag-done-${FRAGMENT_ID}`)).toBeVisible();

    // The reward actually landed in the player's wallet.
    await navTo(page, 'gacha');
    await expect(page.getByTestId('gacha-tolls')).toHaveText('2');
    await navTo(page, 'roster');
    await expect(page.getByTestId('roster-dreamsand')).toContainText('100');
});

test('replaying an already-completed fragment grants no new reward', async ({ page }) => {
    await seed(page, { completedFragments: [FRAGMENT_ID] });
    await open(page);
    await navTo(page, 'fragments');

    await expect(page.getByTestId(`frag-done-${FRAGMENT_ID}`)).toBeVisible();
    await page.getByTestId(`frag-begin-${FRAGMENT_ID}`).click(); // "Replay"
    await walkToEnd(page);

    await expect(page.getByTestId('reader-reward-none')).toBeVisible();
    await expect(page.getByTestId('reader-reward')).toBeHidden();
});