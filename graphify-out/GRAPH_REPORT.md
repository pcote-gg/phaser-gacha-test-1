# Graph Report - phaser-gacha-test-1  (2026-06-01)

## Corpus Check
- 59 files · ~51,846 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 402 nodes · 656 edges · 38 communities (26 shown, 12 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `46f06c6d`
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
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 17 edges
3. `useGame()` - 16 edges
4. `GameState` - 15 edges
5. `Rarity` - 14 edges
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
- `useGame()` --calls--> `VigilScreen()`  [EXTRACTED]
  src/ui/GameContext.tsx → ui/VigilScreen.tsx
- `GameApi` --references--> `AccrualResult`  [EXTRACTED]
  src/ui/GameContext.tsx → core/idle/vigil.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Scene transition lifecycle flow** — boot_scene, preloader_scene, mainmenu_scene, game_scene, gameover_scene [EXTRACTED 1.00]
- **React-Phaser communication bridge** — app_app, phasergame_component, eventbus_eventbus, event_current_scene_ready [INFERRED 0.85]

## Communities (38 total, 12 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (13): EventBus, config, Boot, Game, MainMenu, Preloader, GameOver, config (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (36): author, bugs, url, dependencies, graphify, phaser, react, react-dom (+28 more)

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (12): BrewEvaluation, CAFFEINE_THRESHOLDS, caffeineZone, evaluateTeam(), teamCaffeine(), ZONE_EFFECTS, ZoneEffect, getCharacter (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.14
Nodes (21): allCharacters, BY_ID, CharacterDef, CHARACTERS, Rarity, RARITY_LEVEL_CAP, RARITY_ORDER, FLICKER_PER_DUPLICATE (+13 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (29): author, dependencies, graphify, phaser, react, react-dom, description, devDependencies (+21 more)

### Community 5 - "Community 5"
Cohesion: 0.23
Nodes (17): allFragments(), BY_ID, ChoiceBeat, FragmentBeat, FragmentDef, FragmentReward, FRAGMENTS, FragmentType (+9 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 8 - "Community 8"
Cohesion: 0.17
Nodes (25): BannerConfig, PullResult, AccrualResult, characterPower(), claimDreamsand(), currentHeld(), dreamsandRatePerMin(), dreamsandRatePerSec() (+17 more)

### Community 9 - "Community 9"
Cohesion: 0.19
Nodes (15): effectiveStats(), isAtLevelCap(), LEVEL_COST_BASE, levelCap(), LevelUpBlock, levelUpCharacter(), levelUpCost(), LevelUpQuote (+7 more)

### Community 10 - "Community 10"
Cohesion: 0.29
Nodes (10): Add New Sprite Button, Change Scene Button, Right-Side Debug Control Panel, Blue Gradient Background, Main Menu Text Label, Phaser Logo Title, Phaser Game Main Menu Screen, Sprite Position Control (+2 more)

### Community 11 - "Community 11"
Cohesion: 0.22
Nodes (8): 1. Always navigate the code through Graphiphy first, 2. Investigate before you claim, CLAUDE.md — Reverie Vigil (Phaser 4), Confirm before irreversible or destructive actions, Don't leave scratch files behind, Keep solutions minimal — avoid over-engineering, Respect Phaser and framework conventions, Write code the owner can follow

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 13 - "Community 13"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 14 - "Community 14"
Cohesion: 0.50
Nodes (7): addToTeam(), canAddToTeam(), isInTeam(), isTeamFull(), owns(), removeFromTeam(), toggleTeamMember()

### Community 15 - "Community 15"
Cohesion: 0.40
Nodes (6): Azure Blue (Top), Game Background Asset, Vertical Blue Gradient, Cyan Aqua (Bottom), Minimal Flat Style, Sky Motif

### Community 16 - "Community 16"
Cohesion: 0.33
Nodes (5): enabledPlugins, frontend-design@claude-plugins-official, github@claude-plugins-official, playwright@claude-plugins-official, typescript-lsp@claude-plugins-official

### Community 17 - "Community 17"
Cohesion: 0.47
Nodes (6): Light Blue Gradient Fill, Bold Angular Block Typeface, Chrome Diagonal-Stripe Style, Phaser Logo, Phaser Game Framework, PHASER Wordmark

### Community 19 - "Community 19"
Cohesion: 0.40
Nodes (6): Five-Pointed Star Shape, Game Sprite Asset, Glossy Cartoon Style, Golden Yellow Color, Reward / Collectible Icon, Golden Star Sprite

### Community 20 - "Community 20"
Cohesion: 0.50
Nodes (5): 'current-scene-ready' event, EventBus (Phaser EventEmitter), GameOver Scene, PhaserGame React Bridge Component, React-Phaser Bridge pattern

### Community 22 - "Community 22"
Cohesion: 0.50
Nodes (3): Layout, `src/core` — the game's rules, with no engine attached, The one rule

### Community 23 - "Community 23"
Cohesion: 0.67
Nodes (4): Browser Tab Branding, Colorful Pixel Character Motif, Phaser Gacha Game, Favicon Icon

## Knowledge Gaps
- **153 isolated node(s):** `ZoneEffect`, `ZONE_EFFECTS`, `BrewEvaluation`, `RARITY_LABEL`, `ZONE_COPY` (+148 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `IRefPhaserGame` connect `Community 0` to `Community 9`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `PhaserGame` connect `Community 0` to `Community 9`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `ZoneEffect`, `ZONE_EFFECTS`, `BrewEvaluation` to the rest of the system?**
  _154 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05185185185185185 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.13756613756613756 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._