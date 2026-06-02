# Graph Report - .  (2026-06-01)

## Corpus Check
- 65 files · ~50,739 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 383 nodes · 564 edges · 46 communities (25 shown, 21 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Project Dependencies|Project Dependencies]]
- [[_COMMUNITY_Package Manifest (npm)|Package Manifest (npm)]]
- [[_COMMUNITY_Idle Vigil & Save State|Idle Vigil & Save State]]
- [[_COMMUNITY_Gacha & Character Content|Gacha & Character Content]]
- [[_COMMUNITY_The Brew - Caffeine Gauge|The Brew - Caffeine Gauge]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Dream Fragments|Dream Fragments]]
- [[_COMMUNITY_Phaser Main Menu Demo UI|Phaser Main Menu Demo UI]]
- [[_COMMUNITY_CLAUDE.md Conventions|CLAUDE.md Conventions]]
- [[_COMMUNITY_tsconfig (node)|tsconfig (node)]]
- [[_COMMUNITY_tsconfig (node)|tsconfig (node)]]
- [[_COMMUNITY_Phaser Scene Bootstrap|Phaser Scene Bootstrap]]
- [[_COMMUNITY_React-Phaser Bridge|React-Phaser Bridge]]
- [[_COMMUNITY_Brew Team Rules|Brew Team Rules]]
- [[_COMMUNITY_Phaser GameOver Scene|Phaser GameOver Scene]]
- [[_COMMUNITY_Background Art Asset|Background Art Asset]]
- [[_COMMUNITY_Claude Plugins Config|Claude Plugins Config]]
- [[_COMMUNITY_Phaser Logo Art|Phaser Logo Art]]
- [[_COMMUNITY_Preloader Scene|Preloader Scene]]
- [[_COMMUNITY_Preloader Scene|Preloader Scene]]
- [[_COMMUNITY_Star Sprite Art|Star Sprite Art]]
- [[_COMMUNITY_React-Phaser Bridge Pattern|React-Phaser Bridge Pattern]]
- [[_COMMUNITY_MainMenu Scene|MainMenu Scene]]
- [[_COMMUNITY_Boot Scene|Boot Scene]]
- [[_COMMUNITY_Game Scene|Game Scene]]
- [[_COMMUNITY_Boot Scene|Boot Scene]]
- [[_COMMUNITY_Core Architecture Rule|Core Architecture Rule]]
- [[_COMMUNITY_Favicon  Branding|Favicon / Branding]]
- [[_COMMUNITY_Telemetry log.js|Telemetry log.js]]
- [[_COMMUNITY_Telemetry log.js|Telemetry log.js]]
- [[_COMMUNITY_Game Scene|Game Scene]]
- [[_COMMUNITY_MainMenu Scene|MainMenu Scene]]
- [[_COMMUNITY_Vite Prod Config|Vite Prod Config]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 17 edges
3. `GameState` - 13 edges
4. `useGame()` - 12 edges
5. `Rarity` - 12 edges
6. `EventBus` - 10 edges
7. `settle()` - 8 edges
8. `VigilScreen()` - 8 edges
9. `CLAUDE.md — Reverie Vigil (Phaser 4)` - 8 edges
10. `currentHeld()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `EventBus (Phaser EventEmitter)` --rationale_for--> `React-Phaser Bridge pattern`  [INFERRED]
  src/game/EventBus.ts → README.md
- `PhaserGame React Bridge Component` --rationale_for--> `React-Phaser Bridge pattern`  [INFERRED]
  src/PhaserGame.tsx → README.md
- `log.js anonymous telemetry` --rationale_for--> `Anonymous telemetry rationale`  [INFERRED]
  log.js → README.md
- `currentHeld()` --calls--> `VigilScreen()`  [EXTRACTED]
  core/idle/vigil.ts → ui/VigilScreen.tsx
- `GameState` --references--> `Rarity`  [EXTRACTED]
  core/state/gameState.ts → src/core/types.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Scene transition lifecycle flow** — boot_scene, preloader_scene, mainmenu_scene, game_scene, gameover_scene [EXTRACTED 1.00]
- **React-Phaser communication bridge** — app_app, phasergame_component, eventbus_eventbus, event_current_scene_ready [INFERRED 0.85]

## Communities (46 total, 21 thin omitted)

### Community 0 - "Project Dependencies"
Cohesion: 0.05
Nodes (36): author, bugs, url, dependencies, graphify, phaser, react, react-dom (+28 more)

### Community 1 - "Package Manifest (npm)"
Cohesion: 0.07
Nodes (29): author, dependencies, graphify, phaser, react, react-dom, description, devDependencies (+21 more)

### Community 2 - "Idle Vigil & Save State"
Cohesion: 0.21
Nodes (21): BannerConfig, PullResult, AccrualResult, characterPower(), claimDreamsand(), currentHeld(), dreamsandRatePerSec(), elapsedSinceLastSeen() (+13 more)

### Community 3 - "Gacha & Character Content"
Cohesion: 0.14
Nodes (21): allCharacters, BY_ID, CharacterDef, CHARACTERS, Rarity, RARITY_LEVEL_CAP, RARITY_ORDER, FLICKER_PER_DUPLICATE (+13 more)

### Community 4 - "The Brew - Caffeine Gauge"
Cohesion: 0.14
Nodes (20): BrewEvaluation, CAFFEINE_THRESHOLDS, caffeineZone, evaluateTeam(), teamCaffeine(), ZONE_EFFECTS, ZoneEffect, getCharacter (+12 more)

### Community 5 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 6 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 7 - "Dream Fragments"
Cohesion: 0.17
Nodes (16): allFragments(), BY_ID, ChoiceBeat, FragmentBeat, FragmentDef, FragmentReward, FRAGMENTS, FragmentType (+8 more)

### Community 8 - "Phaser Main Menu Demo UI"
Cohesion: 0.29
Nodes (10): Add New Sprite Button, Change Scene Button, Right-Side Debug Control Panel, Blue Gradient Background, Main Menu Text Label, Phaser Logo Title, Phaser Game Main Menu Screen, Sprite Position Control (+2 more)

### Community 9 - "CLAUDE.md Conventions"
Cohesion: 0.22
Nodes (8): 1. Always navigate the code through Graphiphy first, 2. Investigate before you claim, CLAUDE.md — Reverie Vigil (Phaser 4), Confirm before irreversible or destructive actions, Don't leave scratch files behind, Keep solutions minimal — avoid over-engineering, Respect Phaser and framework conventions, Write code the owner can follow

### Community 10 - "tsconfig (node)"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 11 - "tsconfig (node)"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 13 - "React-Phaser Bridge"
Cohesion: 0.31
Nodes (3): IProps, IRefPhaserGame, PhaserGame

### Community 14 - "Brew Team Rules"
Cohesion: 0.50
Nodes (7): addToTeam(), canAddToTeam(), isInTeam(), isTeamFull(), owns(), removeFromTeam(), toggleTeamMember()

### Community 16 - "Background Art Asset"
Cohesion: 0.40
Nodes (6): Azure Blue (Top), Game Background Asset, Vertical Blue Gradient, Cyan Aqua (Bottom), Minimal Flat Style, Sky Motif

### Community 17 - "Claude Plugins Config"
Cohesion: 0.33
Nodes (5): enabledPlugins, frontend-design@claude-plugins-official, github@claude-plugins-official, playwright@claude-plugins-official, typescript-lsp@claude-plugins-official

### Community 18 - "Phaser Logo Art"
Cohesion: 0.47
Nodes (6): Light Blue Gradient Fill, Bold Angular Block Typeface, Chrome Diagonal-Stripe Style, Phaser Logo, Phaser Game Framework, PHASER Wordmark

### Community 21 - "Star Sprite Art"
Cohesion: 0.40
Nodes (6): Five-Pointed Star Shape, Game Sprite Asset, Glossy Cartoon Style, Golden Yellow Color, Reward / Collectible Icon, Golden Star Sprite

### Community 22 - "React-Phaser Bridge Pattern"
Cohesion: 0.50
Nodes (5): 'current-scene-ready' event, EventBus (Phaser EventEmitter), GameOver Scene, PhaserGame React Bridge Component, React-Phaser Bridge pattern

### Community 27 - "Core Architecture Rule"
Cohesion: 0.50
Nodes (3): Layout, `src/core` — the game's rules, with no engine attached, The one rule

### Community 28 - "Favicon / Branding"
Cohesion: 0.67
Nodes (4): Browser Tab Branding, Colorful Pixel Character Motif, Phaser Gacha Game, Favicon Icon

## Knowledge Gaps
- **161 isolated node(s):** `ZoneEffect`, `ZONE_EFFECTS`, `BrewEvaluation`, `RARITY_LABEL`, `ZONE_COPY` (+156 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **21 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `EventBus` connect `Phaser Scene Bootstrap` to `Game Scene`, `React-Phaser Bridge`, `Phaser GameOver Scene`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `IRefPhaserGame` connect `React-Phaser Bridge` to `The Brew - Caffeine Gauge`, `Phaser Scene Bootstrap`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `PhaserGame` connect `React-Phaser Bridge` to `The Brew - Caffeine Gauge`, `Phaser Scene Bootstrap`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `ZoneEffect`, `ZONE_EFFECTS`, `BrewEvaluation` to the rest of the system?**
  _162 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Package Manifest (npm)` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `Gacha & Character Content` be split into smaller, more focused modules?**
  _Cohesion score 0.13756613756613756 - nodes in this community are weakly interconnected._