# Product

## Register

product

## Users

Players of **Reverie Vigil**, a free-to-play idle gacha RPG. The primary audience is PC and (post-launch) mobile players, ages ~16–35, who already enjoy collection gacha games with a strong visual identity (fans of *Reverse: 1999*, *AFK Journey*, *Eversoul*). A secondary audience is casual players pulled in by the aesthetic who are new to the genre.

Their context: short, habitual sessions. The core daily loop is meant to be completable in **10–15 minutes** — log in, collect idle resources, read or play today's Dream Fragment, adjust the team via The Brew, run a stage, upgrade a character. Extended play is optional, never required. The job they're trying to get done is *return to a world they care about, make a little progress, and experience the next beat of the story* — not grind a chore.

This document governs the **React UI layer** (gacha, roster/"The Awake", The Brew, Dream Fragments, the Vigil/idle screen, navigation, shop, menus). Phaser owns only the combat/world canvas; everything else is HTML/CSS/React and is what impeccable works on.

## Product Purpose

Reverie Vigil is an idle gacha RPG set in **The Reverie** — a living world that dreams *too hard*, so its dreams become reality and wonder curdles into excess. The player is a **Waker** who rouses **The Awake** (characters named after and shaped by coffee and tea) to keep vigil against that excess. Three things differentiate it: a hand-drawn painterly-storybook aesthetic, short story-driven **Dream Fragment** episodes as the reason to return, and a monetization model that respects the player's time — *money buys back time, never power you couldn't earn by playing.*

The UI's purpose is to make these systems feel like pages from the game's own illustrated world while staying fast, legible, and frictionless during a 10–15 minute session. Success looks like: a player can move through gacha → Brew → idle → Fragment → upgrade without confusion, every screen feels crafted and on-world (not a sterile genre template), and nothing in the interface ever feels like it's manufacturing frustration to extract money.

Current state: an MVP vertical slice is built (gacha with pity, The Brew + Caffeine Gauge, idle Vigil with offline accumulation, one Dream Fragment, character upgrades). UI lives in `src/ui/*` with per-screen CSS; persistence is browser localStorage; all game logic is decoupled in `src/core/` so it survives the planned post-MVP engine pivot.

## Brand Personality

**Whimsical, surreal, warmly enchanted.** Three words: *dreamlike, ornate, generous.*

- Voice: storybook-literary with a light touch — wonder and quiet magic over spectacle or hype. The world is *beautiful even when it's threatening*; the nightmare is uncomfortable, not horrifying; the excess is seductive, not monstrous.
- Emotional goals: wonder, discovery, nostalgia, quiet enchantment. Players should feel *invited in*, never pressured.
- Visual register the UI must honor (from the art direction + GDD): painterly hand-drawn illustration, Art Nouveau ornamental detail, the density of illuminated manuscripts for characters, Ghibli-scale environmental wonder. "A well-loved storybook," not a flat app. References used as *feel*, not to copy: Studio Ghibli (environmental awe), Tree of Savior (ornate character density), Octopath Traveler (handcrafted charm), Reverse:1999 / AFK Journey / Eversoul (genre identity bar).
- Established UI palette already in code (preserve as identity): deep plum/aubergine ground `#1a1326`, warm cream ink `#f3e9d2`, antique-gold accent `#e7c873`, serif type (Georgia today, a true display serif later). Warmth and richness come from color, ornament, and type — not from a cream/beige body background.

## Anti-references

What the UI must explicitly **not** look like:

- **Dark-fantasy grimdark.** No blood, iron, harsh oppressive edges, or grim mood. The tone is wonder and warmth; threat is rendered as *uncanny beauty*, never as bleakness.
- **Corporate SaaS / Material.** No flat Material cards, system fonts, generic blue accents, or soulless dashboard chrome. Every screen should carry the world's craft, not read like an admin tool.
- Also avoid the broader "sterile flat UI common in the genre" the GDD warns against — but note the owner is *not* trying to flee genre conventions wholesale or strip charm: some familiar gacha patterns and some sweetness are fine where they serve the player. The hard lines are grimdark and corporate-flat.

Cross-cutting bans from the impeccable house rules still apply (no gradient text, no decorative glassmorphism-as-default, no side-stripe borders, no eyebrow-on-every-section scaffolding).

## Design Principles

1. **Drawn into existence.** If a screen doesn't feel like it belongs to this hand-painted world, reconsider it. Ornament, illustrated framing, and warmth are the default, not decoration added at the end. (GDD Pillar 1: Aesthetic First.)
2. **Respect the player's time in the interface, too.** The 10–15 minute loop must be frictionless: the next action is always obvious, common tasks are few taps, nothing nags. Clarity and speed are a feature, not a compromise of the aesthetic.
3. **Story is the heartbeat — give it room.** Dream Fragments are the reason to return. Their presentation (typography, pacing, cinematic painterly panels) deserves more craft than a typical menu, not less.
4. **Generous, never extractive.** The UI never manufactures frustration or dark-patterns players toward spending. Pity counts and rates are shown transparently; monetization reads as *buying back time*, framed honestly.
5. **Built to be replaced cleanly.** This React UI is knowingly disposable at the post-MVP engine pivot. Favor clear, conventional, well-factored UI code the owner can follow over clever abstractions; keep game logic out of the rendering layer.

## Accessibility & Inclusion

Owner direction: **best-effort, aesthetic-first** — accessibility is not a hard gating requirement for this MVP. No formal WCAG conformance target is being committed to.

That said, as baseline craft (not a gate) impeccable will still avoid shipping genuinely unreadable interfaces: it will keep body text legible against its background, provide visible focus/hover states, and offer a `prefers-reduced-motion` fallback where motion is non-trivial. The UI must also stay **responsive** (functional on desktop and mobile screen sizes) — that is a GDD platform requirement, independent of the accessibility stance. If the owner later wants to commit to WCAG AA, this section should be upgraded.