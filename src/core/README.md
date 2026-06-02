# `src/core` — the game's rules, with no engine attached

Everything in this folder is **pure TypeScript game logic**: gacha math, pity,
the Caffeine Gauge, idle/offline accumulation, character stats, save/load, and
the content data (characters, and later regions and banners).

## The one rule

**Nothing in `src/core` may import `phaser`, `react`, or any rendering code.**

The core only knows the *rules* of Reverie Vigil, not how it looks. Phaser (the
game canvas) and React (the menus/UI) sit on top and read from / write to the
core — never the other way around.

Why this matters: the GDD plans a post-MVP pivot from Phaser to Unity or Godot.
When that happens, this folder is the part that survives untouched — only the
skin gets rebuilt. Keeping logic engine-free also means it can be reasoned about
and tested without launching the game.

## Layout

- `types.ts` — shared domain types (rarity tiers and their config).
- `content/` — authored game **data** (characters now; regions/banners later).
  Content is data, not code, so it can be added and tuned without engineering.
- `state/` — the player's save game shape and how it persists to `localStorage`.
