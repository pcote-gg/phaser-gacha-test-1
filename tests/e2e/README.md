# End-to-end tests (Playwright)

Browser tests that drive the real game (React UI over the Phaser canvas) against
the Vite dev server, so the MVP loops can be re-verified on demand and guard
against regressions.

## Running

```bash
npm run test:e2e          # run the whole suite (headless)
npm run test:e2e:headed   # run in a visible browser (watch it play)
npm run test:e2e:ui       # interactive Playwright UI runner
npm run test:e2e:report   # open the last HTML report
```

`playwright.config.ts` auto-starts `npm run dev` and waits for
`http://localhost:8080` before tests run — no need to start the server yourself.
Locally it reuses a dev server you already have open; in CI it boots a fresh one.

## How the tests work

- **Selectors** are `data-testid` attributes on the React UI (`nav-*`,
  `screen-*`, `gacha-*`, `brew-*`, `roster-*`, `vigil-*`, `frag-*`, `reader-*`).
  They survive copy/layout tweaks, unlike text or CSS-class selectors.
- **Deterministic setup**: instead of fighting gacha RNG and the live idle timer
  to reach a given state, `helpers.ts#seed()` writes a crafted save into
  `localStorage` (the game's real save slot) *before* the app boots. This is
  test-side only — it changes no game code. The exception is
  `persistence.spec.ts`, which never seeds so it can verify the real save
  round-trip across a reload.
- **Canvas combat** is intentionally not asserted in the DOM (Phaser renders to a
  `<canvas>` the DOM can't see into). These tests cover the React UI layer and
  attach full-page screenshots (`nav.spec.ts`) for visual review.

## Coverage

| Spec | MVP loop (GDD) |
|------|----------------|
| `nav.spec.ts` | App boot, Phaser canvas, navigation across all five screens |
| `gacha.spec.ts` | Banner pulls — Tolls spend, roster growth, pity, gating (§9) |
| `brew.spec.ts` | Team building + Caffeine Gauge zones, 4-slot cap (§7B) |
| `roster.spec.ts` | Level-ups — cost, Dreamsand spend, insufficient/cap gating (§6) |
| `vigil.spec.ts` | Idle claim, empty-state gating, "while you were away" (§6) |
| `fragments.spec.ts` | Dream Fragment playthrough, one-time reward, replay (§7A) |
| `persistence.spec.ts` | Save survives a page reload |

## Adding a test

1. If you need a new readout or control, add a `data-testid` to the React
   component (see existing screens for the naming pattern).
2. Seed any preconditions with `seed(page, { … })`, then `open(page)`.
3. Prefer asserting on deterministic outcomes (counts, balances, enabled/disabled
   state) over RNG-driven specifics (which character was pulled).
