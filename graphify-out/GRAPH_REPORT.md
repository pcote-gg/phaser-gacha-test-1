# Graph Report - phaser-gacha-test-1  (2026-06-01)

## Corpus Check
- 49 files · ~46,239 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 316 nodes · 375 edges · 32 communities (24 shown, 8 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5a667a53`
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
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 33|Community 33]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 17 edges
3. `EventBus` - 10 edges
4. `CLAUDE.md — Reverie Vigil (Phaser 4)` - 8 edges
5. `performPull()` - 7 edges
6. `Rarity` - 7 edges
7. `GameOver` - 7 edges
8. `compilerOptions` - 7 edges
9. `compilerOptions` - 7 edges
10. `GachaScreen()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `React-Phaser Bridge pattern` --rationale_for--> `EventBus (Phaser EventEmitter)`  [INFERRED]
  README.md → src/game/EventBus.ts
- `React-Phaser Bridge pattern` --rationale_for--> `PhaserGame React Bridge Component`  [INFERRED]
  README.md → src/PhaserGame.tsx
- `Anonymous telemetry rationale` --rationale_for--> `log.js anonymous telemetry`  [INFERRED]
  README.md → log.js
- `GameApi` --references--> `BannerConfig`  [EXTRACTED]
  src/ui/GameContext.tsx → src/core/gacha/banner.ts
- `GameApi` --references--> `PullResult`  [EXTRACTED]
  src/ui/GameContext.tsx → src/core/gacha/pull.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Scene transition lifecycle flow** — boot_scene, preloader_scene, mainmenu_scene, game_scene, gameover_scene [EXTRACTED 1.00]
- **React-Phaser communication bridge** — app_app, phasergame_component, eventbus_eventbus, event_current_scene_ready [INFERRED 0.85]

## Communities (32 total, 8 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (11): EventBus, config, Game, MainMenu, Preloader, GameOver, Game, IProps (+3 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (29): author, dependencies, graphify, phaser, react, react-dom, description, devDependencies (+21 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.50
Nodes (5): 'current-scene-ready' event, EventBus (Phaser EventEmitter), GameOver Scene, PhaserGame React Bridge Component, React-Phaser Bridge pattern

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (10): Add New Sprite Button, Change Scene Button, Right-Side Debug Control Panel, Blue Gradient Background, Main Menu Text Label, Phaser Logo Title, Phaser Game Main Menu Screen, Sprite Position Control (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 7 - "Community 7"
Cohesion: 0.40
Nodes (6): Azure Blue (Top), Game Background Asset, Vertical Blue Gradient, Cyan Aqua (Bottom), Minimal Flat Style, Sky Motif

### Community 8 - "Community 8"
Cohesion: 0.47
Nodes (6): Light Blue Gradient Fill, Bold Angular Block Typeface, Chrome Diagonal-Stripe Style, Phaser Logo, Phaser Game Framework, PHASER Wordmark

### Community 9 - "Community 9"
Cohesion: 0.11
Nodes (4): config, Boot, MainMenu, Preloader

### Community 10 - "Community 10"
Cohesion: 0.40
Nodes (6): Five-Pointed Star Shape, Game Sprite Asset, Glossy Cartoon Style, Golden Yellow Color, Reward / Collectible Icon, Golden Star Sprite

### Community 11 - "Community 11"
Cohesion: 0.67
Nodes (4): Browser Tab Branding, Colorful Pixel Character Motif, Phaser Gacha Game, Favicon Icon

### Community 17 - "Community 17"
Cohesion: 0.08
Nodes (23): author, bugs, url, dependencies, graphify, phaser, react, react-dom (+15 more)

### Community 18 - "Community 18"
Cohesion: 0.22
Nodes (8): 1. Always navigate the code through Graphiphy first, 2. Investigate before you claim, CLAUDE.md — Reverie Vigil (Phaser 4), Confirm before irreversible or destructive actions, Don't leave scratch files behind, Keep solutions minimal — avoid over-engineering, Respect Phaser and framework conventions, Write code the owner can follow

### Community 19 - "Community 19"
Cohesion: 0.33
Nodes (5): enabledPlugins, frontend-design@claude-plugins-official, github@claude-plugins-official, playwright@claude-plugins-official, typescript-lsp@claude-plugins-official

### Community 20 - "Community 20"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 21 - "Community 21"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, terser, @types/react (+5 more)

### Community 23 - "Community 23"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 24 - "Community 24"
Cohesion: 0.25
Nodes (8): allCharacters(), BY_ID, CharacterDef, getCharacter(), CHARACTERS, Rarity, RARITY_LEVEL_CAP, RARITY_ORDER

### Community 26 - "Community 26"
Cohesion: 0.13
Nodes (24): BannerConfig, FLICKER_PER_DUPLICATE, STANDARD_BANNER, canPull(), performPull(), pickCharacterId(), pityRarityChance(), pullCost() (+16 more)

### Community 33 - "Community 33"
Cohesion: 0.50
Nodes (3): Layout, `src/core` — the game's rules, with no engine attached, The one rule

## Knowledge Gaps
- **147 isolated node(s):** `ResolvedDraw`, `OwnedCharacter`, `RARITY_LABEL`, `GameContext`, `The one rule` (+142 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `EventBus` connect `Community 0` to `Community 9`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `Rarity` connect `Community 24` to `Community 26`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `GameOver` connect `Community 0` to `Community 9`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `ResolvedDraw`, `OwnedCharacter`, `RARITY_LABEL` to the rest of the system?**
  _148 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06280193236714976 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._