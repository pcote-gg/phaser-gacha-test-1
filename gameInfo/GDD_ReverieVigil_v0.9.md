# Game Design Document
## Reverie Vigil
**Version:** 0.9 — Voice Acting Resolved  
**Stage:** Draft Concepts / Pre-Production  
**Last Updated:** 2026-05-31  
**Document Owner:** Pascal  

---

## Table of Contents
1. [Game Overview](#1-game-overview)
2. [Design Pillars](#2-design-pillars)
3. [World & Setting](#3-world--setting)
4. [Characters](#4-characters)
5. [Enemies & Regions](#5-enemies--regions)
6. [Core Gameplay Loop](#6-core-gameplay-loop)
7. [Active Session Systems](#7-active-session-systems)
8. [Progression Systems](#8-progression-systems)
9. [Gacha System](#9-gacha-system)
10. [Monetization](#10-monetization)
11. [Platform & Technical](#11-platform--technical)
12. [Art Direction](#12-art-direction)
13. [Open Questions & TBDs](#13-open-questions--tbds)

---

## 1. Game Overview

### High Concept
A free-to-play idle gacha RPG set in a world that is alive, dreaming, and dangerously unstable. Players collect and deploy **The Awake** — a cast of characters named after and shaped by coffee and tea — to keep vigil against the excesses of a dreaming world. The game is defined by its hand-drawn whimsical aesthetic, short story-driven episodes, and a monetization model that respects the player's time.

### Genre
Idle Gacha RPG

### Target Audience
- Primary: Mobile and PC players who enjoy gacha collection games with strong visual identity (fans of Reverse: 1999, AFK Journey, Eversoul)
- Secondary: Casual players drawn in by the aesthetic who are new to the gacha genre
- Age range: 16–35

### Platforms
- **Launch:** PC (Steam / browser / web app)
- **Follow-up:** Mobile (iOS & Android) — designed for platform parity from day one
- Cross-platform architecture is a core technical requirement, not an afterthought

### Business Model
Free-to-play with light-to-medium monetization pressure.  
Core philosophy: **Time is the primary player resource. Money can buy time back — accelerating what is already earnable — but can never purchase power that is not otherwise achievable through play. No paywalled progression ceiling.**

---

## 2. Design Pillars

These four pillars are the filter for every design decision. When in doubt, return here.

### 1. Aesthetic First
The game's hand-drawn, whimsical visual identity is its primary differentiator. Every system, UI element, and piece of content should feel like it belongs to this world artistically. If it doesn't look like it was *drawn into existence*, reconsider it.

### 2. Respect the Player's Time
The core daily experience is completable in 10–15 minutes. Extended play is possible and rewarding, but never required. Players who log in briefly every day should feel as valued as those who play for hours.

### 3. Story is the Reason to Return
Unlike most idle games where narrative is decorative, story is a core engagement mechanic here. Dream Fragment episodes are the active heartbeat of the game — the thing players come back for, not just to collect, but to *experience*.

### 4. Genuine Fun Over Extraction
The game earns money by being worth spending on, not by manufacturing frustration. Monetization pressure is light to medium. The game should feel generous. Player trust is a long-term asset.

---

## 3. World & Setting

### The Premise
The world is a living, dreaming entity — vast, surreal, and deeply unstable. It does not dream in metaphor; its dreams *become reality*. Landscapes shift. Creatures emerge from collective subconscious. Logic bends.

The world has no fixed geography. Regions are defined by the nature of the dream currently dominating them — sometimes breathtakingly beautiful, sometimes suffocatingly excessive, sometimes outright nightmarish.

### The Core Tension
The world dreams **too hard**. What begins as wonder curdles into excess. A dream of abundance becomes hoarding and gluttony. A dream of passion becomes uncontrollable rage. A dream of rest becomes paralysis.

This excess is not evil — it is the world loving something so completely it cannot stop. The threat is not malice. It is **too much of a good thing**.

### The Player's Role
The player is not a fighter. They are **a Waker** — a conscious presence in The Reverie whose awareness is itself a force. The Waker channels waking energy into sleeping characters, rousing them into action. They do not enter combat directly.

- The Waker's appearance is fluid and player-customizable — they exist at the edge of the dream, not fully in it
- Summoning a new character is an act of **emergence** — drawing someone out of a deep dream-coma for the first time, like a birth or resurrection
- Deploying a known character is an act of **rousing** — waking them from temporary slumber back into full consciousness
- The Waker's relationship to The Awake is that of a conductor to an orchestra — present, essential, never the one playing

### Visual Identity & Tone References
The Reverie's aesthetic is defined by two reference poles that must coexist in tension:

**World feel — Studio Ghibli:**
Lush, living environments where nature is almost overwhelming in its density and detail. Dappled light through dense growth. Places that feel inhabited by something just out of sight. The world is beautiful *and* faintly dangerous — abundance that could become threat. Key reference: the luminous alien garden of Nausicaä, the overgrown path of My Neighbor Totoro, the overwhelming accumulated objects of Spirited Away.

**Character feel — Tree of Savior:**
Extraordinarily detailed, ornate illustrated characters with the density of medieval illuminated manuscripts. Every surface decorated. Every character surrounded by symbolic objects and layered visual detail. Characters feel *fully realized* — too vivid and specific to be absorbed by the dream around them. Their visual intensity is literally what makes them Awake.

### Tone
- Whimsical and surreal — not dark fantasy, not saccharine cute
- The world is *beautiful* even when it is threatening
- Tone references: Studio Ghibli's sense of wonder, the uncanny warmth of dream logic, the visual richness of illustrated storybooks
- The nightmare is uncomfortable, not horrifying. The excess is seductive, not monstrous.

### World Name
**The Reverie** — the dreaming world itself. The name is both noun and state: a place that *is* the dream, and the condition of being lost in one. Players and characters refer to it simply as The Reverie. The game's title, *Reverie Vigil*, names the act of standing watch against it.

---

## 4. Characters

### Concept
All playable characters are members of The Awake — conscious beings in a dreaming world. Their identity, personality, and abilities are rooted in coffee and tea: the universal symbols of wakefulness, clarity, and ritual.

Each character's drink of origin is not merely a name — it shapes who they are. A character born of espresso is intense, fast, and prone to burning out. A character rooted in chamomile is gentle, patient, and quietly resilient. The drink *is* the character.

### Rarity Tiers

| Tier | Drink Inspiration | Character Feel | Availability |
|------|------------------|----------------|--------------|
| **Common** | Everyday teas and basic brews — chamomile, mint, standard drip coffee | Gentle, reliable, humble. The backbone of any team. | Frequently pulled, easy to max out |
| **Rare** | Specialty drinks — earl grey, matcha, cortado, chai | Distinctive, quirky, useful in specific situations | Regularly available on standard banners |
| **Epic** | Single-origin and ceremonial — gyokuro, aged pu-erh, Ethiopian pour-over, cold brew | Refined, complex, intense. Significant power and personality. | Available on standard and limited banners |
| **Legendary** | Lost or near-mythic varieties — a forgotten dynasty tea, a pre-extinction varietal, a legendary blend | Otherworldly, ancient, powerful. Each one feels like a discovery. | Limited banners, high pity investment |
| **Mythic** | Dreams of drinks — a brew that shouldn't exist, made from moonlight or memory | Reality-bending, singular, world-altering. The rarest of The Awake. | Extremely rare, special event banners |

### Rarity Affixes
Rarity affixes (e.g. Rare+, Epic+) may be introduced to represent awakened or enhanced versions of existing characters — **TBD** for post-MVP.

### Character Design Guidelines
- Every character has a **drink of origin** that defines their core personality trait
- Visual design should reflect the drink's colour palette, texture, and energy
- Each character has a short **origin story** accessible in their profile — a Dream Fragment from their perspective
- Characters should feel like distinct *people*, not stat sticks

### Roster Size at Launch
Target launch roster: **~25–30 characters** across all tiers, with Common and Rare tiers most populated.

| Tier | Target Count |
|------|-------------|
| Common | 6–8 |
| Rare | 6–8 |
| Epic | 4–5 |
| Legendary | 2–3 |
| Mythic | 1–2 |
| **Total** | **~20–26** |

### Naming Space & Long-Term Scalability
The coffee/tea naming theme has a finite pool of real-world recognizable drinks (~15–20 broadly familiar varieties). This is a known production consideration, not a design blocker. The world's dream-logic provides natural expansion paths as the roster grows:

- **Common & Rare:** Real, recognizable everyday drinks (chamomile, espresso, matcha, earl grey)
- **Epic:** Global and historical varieties players may not know — discovery is part of the appeal (cascara, salep, dalgona, buttered tea)
- **Legendary:** Rare, near-extinct, or highly regional real varieties (ancient pu-erh, lost cultivars)
- **Mythic:** Dream-invented drinks that couldn't exist in reality — brews made from starlight, crystallized memory, or impossible ingredients
- **Future expansion:** The broader *ritual of waking* (yerba mate, guaraná, kola nut, cacao) extends the pool while remaining thematically coherent

This tiered naming approach means rarity and naming origin reinforce each other: the rarer the character, the further they exist from everyday reality.

---

## 5. Enemies & Regions

### Concept
Enemies are not invaders — they are manifestations of the dreaming world's own excess. Each region of the world is defined by a different flavour of dream-gone-too-far, rooted loosely in the concept of the seven cardinal excesses — reframed entirely without religious connotation as **universal human experiences amplified beyond control**.

### The Seven Dream Regions

| Region | Dream Excess | Enemy Feel | Visual Direction |
|--------|-------------|------------|-----------------|
| **The Feast** | Gluttony — abundance that never ends | Grotesquely beautiful creatures of overflow — food, colour, sensation | Overflowing, saturated, dripping with excess |
| **The Still** | Sloth — the dream pulling everything into deeper sleep | Soft, slow, suffocating comfort — creatures that lull and absorb | Muted pastels, half-closed eyes, slow dissolves |
| **The Blaze** | Wrath — passion and love turned volcanic | Vivid, explosive, achingly beautiful creatures of pure feeling | Burning colours, furious motion, gorgeous destruction |
| **The Mirror** | Envy — a world that wants to become your characters | Uncanny reflections — hollow copies, incomplete imitations | Reflective surfaces, inverted palettes, eerie doubles |
| **The Vault** | Greed — a dream hoarding all light and colour | Glittering, magnetic, consuming creatures of accumulation | Gold and shadow, magnetic pull, beautiful emptiness |
| **The Throne** | Pride — the dream convinced of its own perfection | Regal, crystalline, immovable — the world that refuses to be woken | Pure white, sharp geometry, cold beauty |
| **The Haze** | Lust — desire made physical, the world seducing you to stay | Warm, intoxicating, hazy — creatures of irresistible comfort | Soft focus, warm amber, things that blur at the edges |

### Region Progression
Regions unlock sequentially, forming the game's primary narrative spine. Each region introduces new enemy types, a new chapter of Dream Fragment story content, and escalating challenge for the idle combat system.

### Boss Structure
Each region culminates in a **Dream Apex** — a boss-tier manifestation representing the purest expression of that region's excess. Boss encounters are milestone events tied to story payoffs and the only moment in the game that demands the player's full active attention.

#### MVP: Thematic QTE System
Boss fights use a **Quick Time Event (QTE)** system — the only active combat mechanic in the game. While standard stages run fully idle, Dream Apex encounters pause the auto-battle at dramatic moments and ask the player to respond.

**Core mechanic:**
- At key health thresholds (e.g. 75%, 50%, 25%), the boss triggers a **Dream Surge** — a powerful attack or reality-warping event
- The player must respond within a timing window — tap, hold, or swipe depending on the event
- Successful QTE: the Surge is countered or reduced, the player's team gains a temporary buff
- Failed QTE: the Surge lands at full force, applying a debuff or dealing heavy damage to the team

**Thematic flavouring — same system, seven personalities:**
Each region's QTE *feels* mechanically distinct even though the underlying system is identical. The timing window, visual presentation, and feedback are tuned to the boss's excess:

| Region | Dream Apex | QTE Feel |
|--------|-----------|----------|
| **The Feast** | Glutton of Overflow | Fast, greedy taps — grab what you can before it spills |
| **The Still** | The Endless Rest | Slow, heavy window — fighting the urge to do nothing |
| **The Blaze** | Fury Incarnate | Rapid, furious inputs — punishes hesitation |
| **The Mirror** | The Hollow Echo | Mirrored inputs — do the opposite of what you expect |
| **The Vault** | The Hoarder | Precise, single tap — timing matters more than speed |
| **The Throne** | The Unbroken | Sustained hold — endurance over reaction |
| **The Haze** | The Comfort | Gentle, almost too easy — until it isn't |

**Why this works at MVP:**
One QTE system to build and tune. Seven distinct emotional experiences through visual design, timing tuning, and sound design alone. Minimal dev overhead, maximum memorability.

#### Post-MVP: Bespoke Mini-Games
Each Dream Apex receives a unique mini-game replacing its QTE — a small self-contained game mechanic thematically designed around the boss's excess. These are introduced one region at a time as major content updates, each functioning as a headline feature for that update cycle.

Examples:
- **The Feast:** A plate-management reflex game — keep the feast balanced before it overflows
- **The Still:** A "stay awake" endurance challenge — tap to resist the pull of sleep
- **The Blaze:** A heat gauge — let passion build for power, but don't let it consume your team

Mini-games are designed to be replayable for bonus rewards, giving players a reason to return to completed regions.

---

## 6. Core Gameplay Loop

### The Daily Loop (10–15 minutes)

```
LOG IN
  → Collect offline Dreamsand and materials (accumulated while away)
  → Check Dream Fragment — read/play today's story episode if available
  → Review team composition via The Brew — adjust Caffeine Gauge, check Daily Infusion
  → Spend resources on character upgrades
  → Attempt next available region stage (idle auto-battle)
  → Collect Tolls from daily missions
  → Optional: additional stages, exploration content, events
LOG OUT — Dreamsand accumulation resumes
```

### Extended Play
Players who want to keep playing after their daily core loop can:
- Push further into available region stages
- Replay earlier stages for resource farming
- Engage with seasonal event content
- Explore additional Dream Fragment episodes unlocked by progression

Extended play always yields *more of the same resources* — never exclusive power unavailable to daily players.

### Offline Progression
While the player is away, their team continues to battle automatically, accumulating:
- **Dreamsand** — the primary idle resource. A reference to the Sandman mythology: the very substance that puts the world to sleep, harvested by The Awake as they hold the vigil. Poetic tension — your characters generate the dream's own material as the byproduct of resisting it.
- Character experience
- Upgrade materials

Offline accumulation has a soft time cap (e.g. 12–24 hours) to incentivize daily return without punishing occasional absence.

---

## 7. Active Session Systems

### System A — Dream Fragments *(Core Active Feature)*

**What it is:** Short, illustrated story episodes that are the primary reason players engage actively with the game each session.

**How it works:**
- Each fragment is 2–5 minutes of visual-novel-style narrative
- Hybrid voice approach — key moments voiced, text-driven narrative elsewhere (see Voice Acting section below)
- 1–2 meaningful choices per fragment that affect tone/flavour (not branching outcomes at MVP)
- Each fragment rewards a small but meaningful resource drop on completion
- Fragments unlock through regional progression and character relationship milestones

**Content types:**
- **World Fragments:** Reveal lore about the dreaming world and its current region
- **Character Fragments:** Personal stories told from a character's perspective — their origin, their relationship to wakefulness, their fears
- **Event Fragments:** Limited-time story content tied to seasonal events and new character releases

**Why it matters:** This is the game's differentiator. Story is not decoration — it is the active engagement hook. Players come back not just to collect, but to find out what happens next.

### System B — The Brew *(Team Composition Ritual)*

**What it is:** A pre-battle ritual of assembling your team before each session. Not just a roster screen — a meaningful mechanical layer built on two interlocking systems: the **Caffeine Gauge** and the **Daily Infusion**.

---

#### The Caffeine Gauge

Every character in the game has a **Caffeine Value** reflecting the stimulant intensity of their drink of origin. Low-caffeine characters (chamomile, herbal teas) contribute little to the gauge. High-caffeine characters (espresso, robusta, cold brew concentrate) push it high. Rarity broadly correlates with caffeine value — but not always, creating interesting team-building decisions.

The team's combined Caffeine Value populates a **Caffeine Gauge** with three zones:

| Zone | Gauge Level | Effect |
|------|-------------|--------|
| **Drowsy** | Too low | Team is sluggish — reduced idle combat efficiency, some activities locked |
| **Balanced** | Sweet spot range | Optimal performance — all standard activities available, possible bonus rewards |
| **Overstimulated** | Too high | Team is unstable — combat is volatile (higher highs and lower lows), some activities locked |

**Key design principles:**
- The target is a *range*, not a precise number — there is always room to maneuver
- Both extremes have trade-offs, not just penalties — Overstimulated may be strategically useful in certain situations
- Specific activities (content modes, bonus stages) may require the gauge to be in a specific zone — rewarding intentional team building over raw power stacking
- Higher rarity characters are generally high-caffeine, meaning a team of all Mythics may actually be *too stimulated* — creating a genuine reason to include Common and Rare characters

---

#### Daily Infusion

Each day, one character in the player's roster is randomly **Infused** — awakened more deeply than usual, carrying a boosted effect for that session.

**How it works:**
- The Infused character is revealed during The Brew ritual at the start of each session
- Infused characters have enhanced stats and may **unlock specific activities** unavailable without them — certain Dream Fragment episodes, bonus stages, or region events may require an Infused character to be active in the team
- If the player does not include their Infused character, those activities remain locked for that session

**The tension:** The Infused character may not fit the player's preferred Caffeine Gauge balance — forcing a real decision:
> *"Do I run the Infused bonus and accept a gauge imbalance, or keep my balanced team and skip today's locked content?"*

**Shuffle Tokens:**
- Players receive a limited number of **Shuffle Tokens** through gameplay (daily missions, events, battle pass)
- A Shuffle Token rerolls the Daily Infusion to a different random character from the roster
- Additional Shuffle Tokens can be purchased with premium currency
- This is a pure *timing and control* purchase — not a power purchase. A free player adapts to what the dream gives them. A spending player gains flexibility over when bonuses align.

### System C — Voice Acting (Hybrid Model)

Dream Fragments use a **hybrid voice approach** — selective voicing at emotional peaks, text-driven narrative everywhere else. This balances production cost against immersive impact across an ongoing content pipeline.

**Voiced moments (priority):**
- **Character emergence scenes** — a character's first awakening from dream-coma. This is their introduction and defining moment. Always voiced. Players will replay these.
- **Dream Apex encounters** — boss confrontations and their narrative resolution. The emotional climax of each region.
- **Key story beats** — major revelations and turning points in the main narrative arc.

**Text-driven moments:**
- Day-to-day Dream Fragment episodes
- Character relationship vignettes
- World lore fragments
- Event story content

**Production approach:**
AI voice generation will be used efficiently for supporting and ambient voiced content, reducing cost and scheduling complexity. Human voice talent is reserved for hero moments — character emergences and major story beats — where emotional nuance and performance quality matter most. This is a deliberate resource allocation, not a compromise.

All voice acting targets English as primary language at launch. Localization to additional languages via text translation first; voiced localization post-MVP if audience size justifies it.

### Character Progression
- Characters gain experience through idle combat
- Experience feeds into **level progression** with stat increases
- Characters have a **level cap** tied to their rarity tier — higher rarity = higher ceiling
- Breaking through level caps requires **ascension materials** earned through gameplay

### Ascension
Each rarity tier has multiple ascension steps — a character can be ascended within their tier to push beyond their base level cap. Ascending a character also unlocks visual changes and story content (new Dream Fragment).

**TBD:** Ascension material names and acquisition methods.

### Duplicate Characters
When a player pulls a duplicate character, they receive **TBD: Essence currency** specific to that character's rarity tier. This essence is used to unlock **Resonance levels** — passive ability upgrades that enhance the character without dramatically increasing raw power.

Resonance is flavour and refinement, not a power wall.

### Gear / Equipment
**TBD** — to be scoped for post-MVP or MVP depending on development capacity. If included at MVP, gear should be simple (2–3 slots per character, clear upgrade path).

### Team Synergies
**TBD** — characters may have synergy bonuses when paired (e.g. complementary drink types, same region affinity). To be designed once the character roster is more defined.

---

## 9. Gacha System

### Pull Currency — **Tolls**
The bell toll as the waking mechanism — players spend Tolls to ring characters awake. The image is universal: a bell pulled from outside the dream, its sound cutting through sleep.
- Earned through: daily missions, Dream Fragment completion, regional progression, events, battle pass free track
- Purchased with premium currency for players who want to accelerate
- Narrative framing: *"Ring the bell. Wake the sleeper."*

### Banner Types

| Banner | Description | Pity |
|--------|-------------|------|
| **Standard** | Always available, full roster of Common–Epic characters | Soft pity at 60 pulls, hard pity at 80 pulls |
| **Limited** | Featured Legendary or Mythic character for a set period (~4–6 weeks) | Soft pity at 60, hard pity at 70, 50/50 guarantee on featured unit |
| **Starter** | New player banner with boosted rates and guaranteed first Rare+ | Hard pity at 30 pulls |

### Pity Rules
- Pity counters **carry over** between banners of the same type — players are never reset to zero
- If a featured character is not obtained at hard pity, the next hard pity on that banner type **guarantees** the featured unit
- All pity counts and rates are **displayed transparently** in-game — no hidden mechanics

### Duplicate Policy
Duplicate characters convert to **Flicker** — a character half-remembered, half-awake. Not gone, just dimmer. Flicker is used by rarity tier to unlock Resonance levels. Players are never penalized for pulling a duplicate — every Toll spent has value.

### F2P Pull Velocity
**Target: ~30 free pulls per month** for an active daily player — approximately one pull per day.

This is a deliberate generosity signal. "A free pull every day" is simple, communicable, and creates a daily login habit that feels like a gift rather than an obligation.

**Pull currency sources (monthly estimate for active player):**
| Source | Est. Pulls/Month |
|--------|-----------------|
| Daily login reward | ~7–10 |
| Daily mission completion | ~8–10 |
| Dream Fragment completions | ~4–6 |
| Regional progression milestones | ~4–6 |
| Battle pass free track | ~4–5 |
| Seasonal events | ~2–4 (variable) |
| **Total** | **~29–41** |

**The balance equation:**
Characters are easy to *acquire* — generous pull rates, high free velocity, no characters paywalled from F2P players. Characters are meaningful to *develop* — ascension materials, Resonance upgrades, and progression investment provide depth that takes genuine time and engagement. This keeps collection satisfying while giving spenders and dedicated players a real progression layer to invest in.

> *"Wide but shallow acquisition, deep but rewarding investment."*

Major game milestones (first clear of a Dream Apex, completing a full region, seasonal event finales) award **milestone pull bonuses** — larger currency drops that feel celebratory and proportionate to the achievement. These are above the daily flow, not included in the monthly average.

---

## 10. Monetization

### Philosophy
> *"Time is the primary player resource. Money can buy time back — accelerating what is already earnable — but can never purchase power that is not otherwise achievable through play. No paywalled progression ceiling."*

### Premium Currency — **Somnilux** *(front-runner)* / **Lucence** *(backup)*
The purest form of waking energy — light that exists *inside* the dream itself. A reference to lucid dreaming: the rare state where consciousness awakens within sleep rather than escaping it. Players who spend premium currency are channeling something rarer and more refined than a Toll — sustained wakefulness from within The Reverie.

*Somnilux* — *somni* (sleep) + *lux* (light). Light inside sleep. Invented, world-specific, distinctive.
*Lucence* — light + lucid combined. More familiar register, equally evocative.

**Final name to be confirmed once seen in UI context.**

- Purchased with real money
- Used to: buy Tolls, refill idle accumulation, purchase cosmetics, unlock battle pass premium track
- Never used to purchase exclusive power items unavailable to F2P players

### Monetization Levers

| Feature | Type | Pressure Level |
|---------|------|---------------|
| Pull currency bundles | Acceleration | Medium |
| Stamina/energy refills | Acceleration | Light |
| Battle Pass (premium track) | Acceleration + Cosmetics | Light-Medium |
| Character cosmetics (alternate art, visual effects) | Cosmetic | Light |
| UI / menu themes | Cosmetic | Light |
| Starter pack (one-time purchase, good value) | Acceleration | Light |

### What Is Never For Sale
- Characters unavailable to F2P players
- Exclusive power upgrades
- Skip-to-end progression items
- Advantages in any competitive feature (if PvP is ever added)

### Battle Pass Structure
- **Free track:** Available to all players, rewards pull currency, upgrade materials, cosmetic fragments
- **Premium track:** Purchased once per season (~4–6 weeks), accelerates the same rewards + exclusive cosmetic items
- Both tracks progress through the same missions — the premium track rewards more, not different

---

## 11. Platform & Technical

### Target Platforms
| Platform | Priority | Notes |
|----------|----------|-------|
| PC (Steam) | Launch | Primary development target |
| Web / Browser | Launch | Simultaneous with PC if feasible |
| iOS | Post-launch | Designed for from day one |
| Android | Post-launch | Designed for from day one |

### Cross-Platform Requirements
- UI must be designed responsively — functional on both desktop and mobile screen sizes
- No platform-exclusive content or progression
- Cloud save / account system required for cross-device continuity
- ### Engine & Framework
**MVP: Phaser (web-native JavaScript framework)**

Phaser is the chosen framework for the initial build. Rationale:
- Developer has existing Phaser experience — no learning curve, faster time to prototype
- Web-native by default — browser playability is a hard launch requirement
- Lightweight and minimal dependencies — aligns with developer's technical preferences
- Sufficient for 2D idle combat, gacha systems, and visual novel-style Dream Fragments at MVP scope

**Platform path:**
| Phase | Framework | Target |
|-------|-----------|--------|
| MVP / Prototype | Phaser | Browser (PC & web) |
| Post-MVP pivot | Unity or Godot (TBD) | PC, iOS, Android |

The pivot to Unity or Godot will be evaluated once the core loop is validated. The pivot decision should be made before mobile development begins — not during. All game systems and content should be designed platform-agnostically from day one to minimize rebuild cost at migration.

**Web-first requirement:** Browser playability without download is a hard launch requirement — not a nice-to-have. All MVP development decisions should be evaluated against this constraint first.

### Technical Constraints
- Developer collaborator has strong programming background with preference for minimal dependencies
- Architecture should favour simplicity and maintainability over complexity
- Backend required for: account management, gacha pull processing, idle accumulation tracking, event scheduling

**TBD:** Backend solution (self-hosted vs. third-party service)

---

## 12. Art Direction

### Visual Identity
- **Style:** Hand-drawn illustration aesthetic — the world should look like it was painted or drawn into existence
- **Palette:** Rich, saturated colours with dreamlike softness — not flat, not photorealistic
- **Line work:** Expressive, slightly imperfect — organic over mechanical
- **Animation:** Characters and environments should feel *alive* — gentle idle animations, fluid combat effects

### Visual Tone by Context

| Context | Tone | Reference Feel |
|---------|------|---------------|
| Menus / UI | Warm, inviting, illustrated | A well-loved storybook |
| Character portraits | Expressive, distinct, drink-influenced | Hand-painted trading cards |
| Dream Fragment panels | Cinematic, painterly, emotionally driven | Graphic novel / illustrated novel |
| Combat | Whimsical but impactful — effects feel magical | Spell animations with weight and wonder |
| Nightmare regions | Uncanny beauty — unsettling without being horrifying | Beautiful wrongness |

### Character Visual Design Principles
- Each character's colour palette is drawn from their drink of origin
- Rarity tier should be readable at a glance (silhouette complexity, visual richness, effects)
- Characters should feel like illustrated *people*, not generic RPG units
- Mythic tier characters may break visual conventions — they are allowed to feel like something that shouldn't exist

### UI / UX Direction
- UI should feel like it belongs to the world — illustrated frames, hand-lettered (or hand-lettered-style) typography
- Avoid sterile flat UI common in the genre — every screen should feel like a page from the game's world
- **TBD:** UI art direction brief (separate document, to be produced in pre-production)

---

## 13. Open Questions & TBDs

These items are intentionally deferred — they will be resolved as the project moves from Draft Concepts into pre-production and MVP.

| # | Topic | Question | Priority |
|---|-------|----------|----------|
| 1 | ~~Title~~ | ~~What is the game's name?~~ | ~~High~~ → **Resolved v0.7: Reverie Vigil** |
| 2 | ~~World Name~~ | ~~What is the dreaming world called?~~ | ~~Medium~~ → **Resolved v0.7: The Reverie** |
| 3 | Currency Names | Pull currency, premium currency, essence currency | Medium → **Partially resolved v0.8: Tolls (pull), Flicker (essence). Premium: Somnilux / Lucence — pending final confirmation** |
| 4 | ~~Idle Resource Name~~ | ~~What is the primary offline accumulation resource called?~~ | ~~Medium~~ → **Resolved v0.8: Dreamsand** |
| 5 | ~~The Brew (System B)~~ | ~~What reward mechanic makes team composition feel genuinely meaningful?~~ | ~~High~~ → **Resolved v0.2** |
| 6 | ~~Boss Encounters~~ | ~~Do bosses have any active player input, or remain fully idle?~~ | ~~High~~ → **Resolved v0.3** |
| 7 | ~~Voice Acting~~ | ~~Are Dream Fragments voiced, text-only, or hybrid?~~ | ~~Medium~~ → **Resolved v0.9: Hybrid — AI for supporting content, human talent for hero moments** |
| 8 | ~~Launch Roster Size~~ | ~~How many characters at launch across all tiers?~~ | ~~High~~ → **Resolved v0.4** |
| 9 | Gear System | Include at MVP or post-launch? How complex? | High |
| 10 | Team Synergies | Character pairing bonuses — scope and design | Medium |
| 11 | ~~F2P Pull Velocity~~ | ~~Target free pulls per month for active daily player~~ | ~~High~~ → **Resolved v0.5** |
| 12 | ~~Engine / Framework~~ | ~~Unity, Godot, or web-native?~~ | ~~High~~ → **Resolved v0.6** |
| 13 | Backend Solution | Self-hosted or third-party service? | High |
| 14 | Rarity Affixes | Design and unlock conditions for + tiers | Low |
| 15 | PvP | Is there ever a competitive layer? If so, what form? | Low |

---

*This document is a living design reference. Everything in it is subject to change as the project develops. A "TBD" is better than a blank — return to open questions as design matures.*

*GDD_UntitledDreamGacha_v0.1 — Pascal — 2026-05-31*
