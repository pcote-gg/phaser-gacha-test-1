# Design

The visual language for **Reverie Vigil**'s React UI, derived from `gameInfo/art_direction.md` and the GDD — *not* reverse-engineered from the first-pass screens (those were assembled, not designed, and are being brought up to this standard). The goal: every screen should read like **a page from an illustrated storybook of The Reverie** — painterly, ornamental, warm, full of quiet wonder — never a sterile app form.

This file is the north star. New work conforms to it; when code and this file disagree, this file wins until it's deliberately revised.

> **Boundary:** This is a *code* design system (CSS/SVG/motion). It carries the storybook feel through framing, ornament, color, type, and motion, and stages slots where hand-drawn art will live. The painterly illustration itself (character art, region backdrops, Dream Fragment panels) comes from art assets, not from this system.

---

## Theme

A single **dark, warm, dreamlike** theme. Color strategy: **Committed** — a deep **forest-teal twilight** carries the surface; antique gold is the single precious accent; luminous "dream-light" glows (amber + sage) supply atmosphere. There is no light mode; the game is set inside a dream at dusk.

Purple is deliberately avoided: it's the default tell of AI-generated UI, and the art direction points elsewhere — the lush, overgrown Ghibli world ("a green, overgrown loudness," as the first fragment puts it). Color also does narrative work: each Dream Fragment type tints its own scene (character = amber/gold, world = sage, event = rose), so the palette carries meaning, not just decoration.

Physical scene that fixes the mood: *a dreaming, overgrown forest at dusk, lit by gold-leaf and drifting fireflies; an old gilt-edged storybook open in the half-light.*

---

## Color

OKLCH-authored where practical; hex shown for reference. Tokens live in `src/ui/theme.css` as `--rv-*` custom properties.

### Ground (forest-teal twilight, layered for depth)
Token names are hue-neutral so the palette can be re-tuned later without renaming.
| Token | Hex | Use |
|---|---|---|
| `--rv-deep` | `#0a1510` | Deepest ground / vignette edges |
| `--rv-ground` | `#0e1a14` | Base — a dreaming overgrown forest at dusk |
| `--rv-surface` | `#16271e` | Plate / page surface |
| `--rv-veil` | `#1d3328` | Hover / lifted surface |

### Ink (warm cream)
| Token | Hex | Use |
|---|---|---|
| `--rv-ink` | `#f3e9d2` | Primary text, reading copy |
| `--rv-ink-soft` | `#d9cfb6` | Secondary text |
| `--rv-ink-muted` | `#b3a8a0` | Tertiary chrome only (never body copy) |

### Gilt (the one accent)
| Token | Hex | Use |
|---|---|---|
| `--rv-gold` | `#e7c873` | Accent, primary buttons, gilt frame lines |
| `--rv-gold-bright` | `#f6e3a4` | Highlights, glow cores |
| `--rv-gold-deep` | `#b8923f` | Engraved shadow, pressed states |

### Dream-light (atmosphere only, never text)
Warm amber `rgba(231,200,115,·)`, sage `rgba(120,205,160,·)`, rose `rgba(215,155,196,·)` — used as soft radial glows in the full-bleed background and as bloom behind precious moments.

### Semantic — Fragment types
`--rv-world` `#8fc6b0` (sage) · `--rv-character` `#e7c873` (gold) · `--rv-event` `#d79bc4` (rose).

### Semantic — Rarity
common `#9aa0a6` · rare `#5aa9e6` · epic `#b07ce8` · legendary `#e7c873` · mythic `#f08bbf`.
Rarity reads through **glow and treatment**, never a side-stripe border (the first pass used `border-left` stripes — banned here).

### Contrast stance
Accessibility is best-effort per PRODUCT.md, but baseline craft holds: reading copy uses `--rv-ink` / `--rv-ink-soft` on plum (comfortably legible); `--rv-ink-muted` is reserved for non-essential chrome.

---

## Typography

Two serif families on a real contrast axis — engraved monumental caps against a humanist book serif — which together read as an **illuminated manuscript**. Loaded in `index.html` (see note in that file).

| Role | Family | Use |
|---|---|---|
| Display | **Cinzel** (`--rv-display`) | Screen + episode titles, the type-seal labels. Sparse, tracked, never body. |
| Body / reading | **EB Garamond** (`--rv-body`) | All reading copy, dialogue, blurbs, UI text. Generous size and leading. |

Fallback: `Georgia, 'Times New Roman', serif` (the original UI font), so the design degrades gracefully if web fonts fail.

- **Type scale** (rem, so it honours the browser's font-size): `--rv-text-2xs` 0.8rem · `--rv-text-xs` 0.9 · `--rv-text-sm` 0.98 · `--rv-text-base` 1.08 (default body, set on `.rv-plate`) · `--rv-text-md` 1.2 · `--rv-text-lg` 1.4. **Accessibility floor: nothing renders below `--rv-text-2xs` (~12.8px), and that size is reserved for short uppercase labels — never running text.** Serif faces read small, so the base sits a notch above the usual 1rem.
- Reading copy in the Dream Fragment reader is `clamp(1.18rem, …, 1.34rem)` / line-height 1.7, capped near 60ch.
- Narration vs. speech: narration is italic EB Garamond; spoken lines are roman under a gilt small-caps **nameplate**.
- Uppercase only for short labels (type seals, eyebrows used sparingly). No all-caps body. Display max stays well under the 6rem ceiling.

---

## Ornament

The signature layer that separates this from a flat app. Authored as inline SVG in `src/ui/Ornaments.tsx` so it's crisp at any size and tintable with gilt.

- **Corner flourishes** — an Art-Nouveau curling-vine motif at the four corners of every plate (one path, flipped per corner).
- **Fleuron divider** — a centered vegetal motif flanked by thin gilt rules; used under titles and between movements instead of plain `<hr>`.
- **Gilt double-frame** — a thin inset gold line inside the plate edge, evoking a framed page / book plate.
- **In-world icons** — a small **bell** (Tolls) and **dreamsand sparkle** (Dreamsand) replace emoji.

Ornament is elegant, not busy: it frames and punctuates, it never fills.

---

## Surfaces & Layout

- **The plate** (`.rv-plate`): the base surface for every screen — barely-rounded (4px, like paper, not a 12px app card), a soft top-lit plum gradient, a deep drop shadow, the gilt double-frame, and corner flourishes. Replaces the old flat `rgba(26,19,38,0.92)` rounded rects.
- **Full-bleed dream atmosphere** (`.rv-atmosphere`): a fixed layer behind the plate — layered dream-light radials, a low-opacity painterly grain (SVG `feTurbulence`), a vignette, and slow-drifting motes. This is what makes the surround feel like *being inside the dream* rather than a panel floating on a flat background.
- **Illustration slots**: where hand-drawn art will go, a framed panel with a type-keyed dream-light gradient and a faint motif — intentional and atmospheric even before real art lands.
- Flexbox for 1D, Grid for 2D. Content widths cap for readability (reader ≈ 720px, lists ≈ 460px). Responsive down to mobile (web-first, GDD requirement).
- z-index scale: atmosphere `0` → plate `1` → nav `20` → (future) modal/toast above.

---

## Motion

Dreamlike and gentle; motion is part of the build, not an afterthought.

- Easing: ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)` (`--rv-ease`). No bounce, no elastic.
- Story beats fade-and-rise on advance; the reward "gathers" with a soft gold bloom; dream-light motes drift slowly in the atmosphere; "continue" cue pulses softly.
- **Reduced motion is honored**: `@media (prefers-reduced-motion: reduce)` swaps every animation for an instant/crossfade state. Content is always visible by default (reveals enhance, never gate).

## Accessibility layer

Baseline craft (PRODUCT.md keeps formal WCAG optional, but these hold by default):

- **Readable type:** the scale floor above; serif body sized up so it doesn't read small. Line-height ≥1.5 on body, 1.7 on prose.
- **Tap targets:** primary buttons and nav tabs are ≥44px tall.
- **Keyboard focus:** a blanket gold `:focus-visible` ring on every interactive element (low-specificity `:where()`, so component rings still win).
- **Reduced motion:** every animation has a `prefers-reduced-motion` fallback.
- **More contrast:** `@media (prefers-contrast: more)` brightens ink and strengthens gilt lines/borders.
- **User zoom respected:** all sizing is rem-based; `text-size-adjust: 100%`.

---

## Components (vocabulary)

The reusable pieces the rest of the screens inherit:

- `.rv-plate` + corner flourishes — the page surface.
- `.rv-atmosphere` — the dream backdrop.
- `.rv-divider` (fleuron) — section punctuation.
- `.rv-btn` (gilt primary) / `.rv-btn--ghost` (quiet secondary / "leave") — buttons with focus-visible rings.
- `.rv-seal` — the small ornamented type/category label (Fragment type, later rarity, etc.).
- Illustration-slot panel.
- Bell / Dreamsand icons.

---

## Reference implementation

The **Dream Fragment** screen (`src/ui/FragmentsScreen.tsx` + `fragments.css`) is the first screen built to this language — the episode library and the visual-novel reader. It is the worked example the other screens (Gacha, Roster, Brew, Vigil, nav) follow when the language is propagated.