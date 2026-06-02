# Graph Report - phaser-gacha-test-1  (2026-06-02)

## Corpus Check
- 69 files · ~89,000 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 448 nodes · 728 edges · 55 communities (29 shown, 26 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9be71539`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 17 edges
3. `useGame()` - 16 edges
4. `GameState` - 15 edges
5. `Rarity` - 14 edges
6. `EventBus` - 10 edges
7. `VigilScreen()` - 9 edges
8. `FragmentReward` - 9 edges
9. `Reverie Vigil` - 8 edges
10. `CLAUDE.md — Reverie Vigil (Phaser 4)` - 8 edges

## Surprising Connections (you probably didn't know these)
- `BrewScreen()` --calls--> `useGame()`  [EXTRACTED]
  src/ui/BrewScreen.tsx → src/ui/GameContext.tsx
- `FragmentsScreen()` --calls--> `useGame()`  [EXTRACTED]
  src/ui/FragmentsScreen.tsx → src/ui/GameContext.tsx
- `FragmentReader()` --calls--> `useGame()`  [EXTRACTED]
  src/ui/FragmentsScreen.tsx → src/ui/GameContext.tsx
- `VigilScreen()` --calls--> `useGame()`  [EXTRACTED]
  src/ui/VigilScreen.tsx → src/ui/GameContext.tsx
- `GameApi` --references--> `FragmentReward`  [EXTRACTED]
  src/ui/GameContext.tsx → src/core/content/fragments.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **React-Phaser communication bridge** — app_app, phasergame_component, eventbus_eventbus, event_current_scene_ready [INFERRED 0.85]
- **Five-screen React UI overlay over Phaser canvas** — app_app, vigilscreen_vigilscreen, fragmentsscreen_fragmentsscreen, brewscreen_brewscreen, rosterscreen_rosterscreen, gachascreen_gachascreen [EXTRACTED 1.00]
- **GameContext as shared state hub for all screens** — gamecontext_usegame, vigilscreen_vigilscreen, brewscreen_brewscreen, rosterscreen_rosterscreen, gachascreen_gachascreen [EXTRACTED 1.00]
- **e2e deterministic localStorage seeding flow** — helpers_seed, concept_localstorage_save, save_save_key, gamestate_save_version [INFERRED 0.85]

## Communities (55 total, 26 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (33): allCharacters(), BY_ID, CharacterDef, getCharacter(), CHARACTERS, Rarity, RARITY_LEVEL_CAP, RARITY_ORDER (+25 more)

### Community 1 - "Community 1"
Cohesion: 0.23
Nodes (16): allFragments(), BY_ID, ChoiceBeat, FragmentBeat, FragmentDef, FragmentReward, FRAGMENTS, FragmentType (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.50
Nodes (4): 'current-scene-ready' event, EventBus (Phaser EventEmitter), GameOver Scene, PhaserGame React Bridge Component

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (36): author, bugs, url, dependencies, graphify, phaser, react, react-dom (+28 more)

### Community 4 - "Community 4"
Cohesion: 0.14
Nodes (25): BrewEvaluation, CAFFEINE_THRESHOLDS, caffeineZone, evaluateTeam(), teamCaffeine(), ZONE_EFFECTS, ZoneEffect, characterPower() (+17 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (34): author, dependencies, graphify, phaser, react, react-dom, description, devDependencies (+26 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 8 - "Community 8"
Cohesion: 0.26
Nodes (8): navTo(), open(), OwnedCharacter, readNumber(), Screen, seed(), SeedState, SCREENS

### Community 9 - "Community 9"
Cohesion: 0.19
Nodes (9): IProps, IRefPhaserGame, PhaserGame, IProps, IRefPhaserGame, PhaserGame, IProps, IRefPhaserGame (+1 more)

### Community 10 - "Community 10"
Cohesion: 0.20
Nodes (9): Available Commands, Deploying, Design Reference, Getting Started, Handling Assets, Project Structure, React ↔ Phaser Bridge, Reverie Vigil (+1 more)

### Community 11 - "Community 11"
Cohesion: 0.22
Nodes (8): 1. Always navigate the code through Graphiphy first, 2. Investigate before you claim, CLAUDE.md — Reverie Vigil (Phaser 4), Confirm before irreversible or destructive actions, Don't leave scratch files behind, Keep solutions minimal — avoid over-engineering, Respect Phaser and framework conventions, Write code the owner can follow

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 13 - "Community 13"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 15 - "Community 15"
Cohesion: 0.18
Nodes (22): addToTeam(), canAddToTeam(), isInTeam(), isTeamFull(), owns(), removeFromTeam(), toggleTeamMember(), BannerConfig (+14 more)

### Community 16 - "Community 16"
Cohesion: 0.36
Nodes (3): EventBus, EventBus, config

### Community 17 - "Community 17"
Cohesion: 0.33
Nodes (5): enabledPlugins, github@claude-plugins-official, impeccable@impeccable, playwright@claude-plugins-official, typescript-lsp@claude-plugins-official

### Community 18 - "Community 18"
Cohesion: 0.33
Nodes (5): Adding a test, Coverage, End-to-end tests (Playwright), How the tests work, Running

### Community 19 - "Community 19"
Cohesion: 0.40
Nodes (6): Azure Blue (Top), Game Background Asset, Vertical Blue Gradient, Cyan Aqua (Bottom), Minimal Flat Style, Sky Motif

### Community 20 - "Community 20"
Cohesion: 0.47
Nodes (6): Light Blue Gradient Fill, Bold Angular Block Typeface, Chrome Diagonal-Stripe Style, Phaser Logo, Phaser Game Framework, PHASER Wordmark

### Community 23 - "Community 23"
Cohesion: 0.40
Nodes (6): Five-Pointed Star Shape, Game Sprite Asset, Glossy Cartoon Style, Golden Yellow Color, Reward / Collectible Icon, Golden Star Sprite

### Community 28 - "Community 28"
Cohesion: 0.50
Nodes (3): Layout, `src/core` — the game's rules, with no engine attached, The one rule

### Community 29 - "Community 29"
Cohesion: 0.67
Nodes (4): Browser Tab Branding, Colorful Pixel Character Motif, Phaser Gacha Game, Favicon Icon

### Community 35 - "Community 35"
Cohesion: 0.67
Nodes (3): useGame / GameContext, SAVE_VERSION / GameState, SAVE_KEY (localStorage save slot)

## Knowledge Gaps
- **188 isolated node(s):** `Tech Stack`, `Available Commands`, `Project Structure`, `React ↔ Phaser Bridge`, `Handling Assets` (+183 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **26 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `EventBus` connect `Community 16` to `Community 32`, `Community 25`, `Community 14`, `Community 9`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `IRefPhaserGame` connect `Community 9` to `Community 4`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `PhaserGame` connect `Community 9` to `Community 4`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `Tech Stack`, `Available Commands`, `Project Structure` to the rest of the system?**
  _188 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10909090909090909 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.1354723707664884 - nodes in this community are weakly interconnected._