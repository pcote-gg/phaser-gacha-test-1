# Graph Report - .  (2026-06-01)

## Corpus Check
- 67 files · ~51,846 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 400 nodes · 627 edges · 39 communities (26 shown, 13 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_App Shell & Phaser Scenes|App Shell & Phaser Scenes]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Brew Caffeine & Vigil Idle|Brew Caffeine & Vigil Idle]]
- [[_COMMUNITY_Characters & Gacha Pulls|Characters & Gacha Pulls]]
- [[_COMMUNITY_Project Manifest & Deps|Project Manifest & Deps]]
- [[_COMMUNITY_Dream Fragments|Dream Fragments]]
- [[_COMMUNITY_TS Compiler Config|TS Compiler Config]]
- [[_COMMUNITY_TS Compiler Config (App)|TS Compiler Config (App)]]
- [[_COMMUNITY_Game State & Save|Game State & Save]]
- [[_COMMUNITY_Character Leveling & Roster|Character Leveling & Roster]]
- [[_COMMUNITY_Main Menu UI Elements|Main Menu UI Elements]]
- [[_COMMUNITY_CLAUDE.md Project Rules|CLAUDE.md Project Rules]]
- [[_COMMUNITY_TS Node Config|TS Node Config]]
- [[_COMMUNITY_TS Node Config (2)|TS Node Config (2)]]
- [[_COMMUNITY_Team Composition Logic|Team Composition Logic]]
- [[_COMMUNITY_Background Art Asset|Background Art Asset]]
- [[_COMMUNITY_Claude Plugins Config|Claude Plugins Config]]
- [[_COMMUNITY_Phaser Logo Art|Phaser Logo Art]]
- [[_COMMUNITY_Preloader Scene|Preloader Scene]]
- [[_COMMUNITY_Star Sprite Asset|Star Sprite Asset]]
- [[_COMMUNITY_React-Phaser Bridge|React-Phaser Bridge]]
- [[_COMMUNITY_Boot Scene|Boot Scene]]
- [[_COMMUNITY_Core Architecture Docs|Core Architecture Docs]]
- [[_COMMUNITY_Browser Tab Branding|Browser Tab Branding]]
- [[_COMMUNITY_Telemetry Script|Telemetry Script]]
- [[_COMMUNITY_Telemetry Script (2)|Telemetry Script (2)]]
- [[_COMMUNITY_Vite Prod Config|Vite Prod Config]]
- [[_COMMUNITY_Template Reference|Template Reference]]
- [[_COMMUNITY_Telemetry Rationale|Telemetry Rationale]]
- [[_COMMUNITY_PhaserGame Ref Interface|PhaserGame Ref Interface]]
- [[_COMMUNITY_React Entry Point|React Entry Point]]
- [[_COMMUNITY_Boot Scene Node|Boot Scene Node]]
- [[_COMMUNITY_Game Scene Node|Game Scene Node]]
- [[_COMMUNITY_MainMenu Scene Node|MainMenu Scene Node]]
- [[_COMMUNITY_Preloader Scene Node|Preloader Scene Node]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 17 edges
3. `useGame()` - 15 edges
4. `GameState` - 14 edges
5. `Rarity` - 12 edges
6. `EventBus` - 10 edges
7. `FragmentReward` - 9 edges
8. `GameApi` - 8 edges
9. `settle()` - 8 edges
10. `VigilScreen()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `EventBus (Phaser EventEmitter)` --rationale_for--> `React-Phaser Bridge pattern`  [INFERRED]
  src/game/EventBus.ts → README.md
- `PhaserGame React Bridge Component` --rationale_for--> `React-Phaser Bridge pattern`  [INFERRED]
  src/PhaserGame.tsx → README.md
- `log.js anonymous telemetry` --rationale_for--> `Anonymous telemetry rationale`  [INFERRED]
  log.js → README.md
- `FragmentReward` --references--> `GameApi`  [EXTRACTED]
  src/core/content/fragments.ts → ui/GameContext.tsx
- `GameApi` --references--> `BannerConfig`  [EXTRACTED]
  ui/GameContext.tsx → src/core/gacha/banner.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Scene transition lifecycle flow** — boot_scene, preloader_scene, mainmenu_scene, game_scene, gameover_scene [EXTRACTED 1.00]
- **React-Phaser communication bridge** — app_app, phasergame_component, eventbus_eventbus, event_current_scene_ready [INFERRED 0.85]

## Communities (39 total, 13 thin omitted)

### Community 0 - "App Shell & Phaser Scenes"
Cohesion: 0.05
Nodes (13): EventBus, config, Game, MainMenu, Preloader, GameOver, config, Boot (+5 more)

### Community 1 - "Package Dependencies"
Cohesion: 0.05
Nodes (36): author, bugs, url, dependencies, graphify, phaser, react, react-dom (+28 more)

### Community 2 - "Brew Caffeine & Vigil Idle"
Cohesion: 0.13
Nodes (26): BrewEvaluation, CAFFEINE_THRESHOLDS, caffeineZone, evaluateTeam(), teamCaffeine(), ZONE_EFFECTS, ZoneEffect, getCharacter (+18 more)

### Community 3 - "Characters & Gacha Pulls"
Cohesion: 0.13
Nodes (23): allCharacters, BY_ID, CharacterDef, CHARACTERS, Rarity, RARITY_LEVEL_CAP, RARITY_ORDER, BannerConfig (+15 more)

### Community 4 - "Project Manifest & Deps"
Cohesion: 0.07
Nodes (29): author, dependencies, graphify, phaser, react, react-dom, description, devDependencies (+21 more)

### Community 5 - "Dream Fragments"
Cohesion: 0.23
Nodes (17): allFragments(), BY_ID, ChoiceBeat, FragmentBeat, FragmentDef, FragmentReward, FRAGMENTS, FragmentType (+9 more)

### Community 6 - "TS Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 7 - "TS Compiler Config (App)"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 8 - "Game State & Save"
Cohesion: 0.29
Nodes (13): AccrualResult, LevelUpResult, emptyFlicker(), GameState, newGame(), OwnedCharacter, clearSave(), loadGame() (+5 more)

### Community 9 - "Character Leveling & Roster"
Cohesion: 0.23
Nodes (11): effectiveStats(), isAtLevelCap(), LEVEL_COST_BASE, levelCap(), LevelUpBlock, levelUpCharacter(), levelUpCost(), LevelUpQuote (+3 more)

### Community 10 - "Main Menu UI Elements"
Cohesion: 0.29
Nodes (10): Add New Sprite Button, Change Scene Button, Right-Side Debug Control Panel, Blue Gradient Background, Main Menu Text Label, Phaser Logo Title, Phaser Game Main Menu Screen, Sprite Position Control (+2 more)

### Community 11 - "CLAUDE.md Project Rules"
Cohesion: 0.22
Nodes (8): 1. Always navigate the code through Graphiphy first, 2. Investigate before you claim, CLAUDE.md — Reverie Vigil (Phaser 4), Confirm before irreversible or destructive actions, Don't leave scratch files behind, Keep solutions minimal — avoid over-engineering, Respect Phaser and framework conventions, Write code the owner can follow

### Community 12 - "TS Node Config"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 13 - "TS Node Config (2)"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 14 - "Team Composition Logic"
Cohesion: 0.50
Nodes (7): addToTeam(), canAddToTeam(), isInTeam(), isTeamFull(), owns(), removeFromTeam(), toggleTeamMember()

### Community 15 - "Background Art Asset"
Cohesion: 0.40
Nodes (6): Azure Blue (Top), Game Background Asset, Vertical Blue Gradient, Cyan Aqua (Bottom), Minimal Flat Style, Sky Motif

### Community 16 - "Claude Plugins Config"
Cohesion: 0.33
Nodes (5): enabledPlugins, frontend-design@claude-plugins-official, github@claude-plugins-official, playwright@claude-plugins-official, typescript-lsp@claude-plugins-official

### Community 17 - "Phaser Logo Art"
Cohesion: 0.47
Nodes (6): Light Blue Gradient Fill, Bold Angular Block Typeface, Chrome Diagonal-Stripe Style, Phaser Logo, Phaser Game Framework, PHASER Wordmark

### Community 19 - "Star Sprite Asset"
Cohesion: 0.40
Nodes (6): Five-Pointed Star Shape, Game Sprite Asset, Glossy Cartoon Style, Golden Yellow Color, Reward / Collectible Icon, Golden Star Sprite

### Community 20 - "React-Phaser Bridge"
Cohesion: 0.50
Nodes (5): 'current-scene-ready' event, EventBus (Phaser EventEmitter), GameOver Scene, PhaserGame React Bridge Component, React-Phaser Bridge pattern

### Community 22 - "Core Architecture Docs"
Cohesion: 0.50
Nodes (3): Layout, `src/core` — the game's rules, with no engine attached, The one rule

### Community 23 - "Browser Tab Branding"
Cohesion: 0.67
Nodes (4): Browser Tab Branding, Colorful Pixel Character Motif, Phaser Gacha Game, Favicon Icon

## Knowledge Gaps
- **158 isolated node(s):** `ZoneEffect`, `ZONE_EFFECTS`, `BrewEvaluation`, `RARITY_LABEL`, `ZONE_COPY` (+153 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `IRefPhaserGame` connect `App Shell & Phaser Scenes` to `Brew Caffeine & Vigil Idle`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `PhaserGame` connect `App Shell & Phaser Scenes` to `Brew Caffeine & Vigil Idle`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `ZoneEffect`, `ZONE_EFFECTS`, `BrewEvaluation` to the rest of the system?**
  _159 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell & Phaser Scenes` be split into smaller, more focused modules?**
  _Cohesion score 0.05185185185185185 - nodes in this community are weakly interconnected._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Brew Caffeine & Vigil Idle` be split into smaller, more focused modules?**
  _Cohesion score 0.12605042016806722 - nodes in this community are weakly interconnected._
- **Should `Characters & Gacha Pulls` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._