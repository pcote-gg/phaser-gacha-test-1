# Graph Report - phaser-gacha-test-1  (2026-06-01)

## Corpus Check
- 38 files · ~43,318 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 267 nodes · 277 edges · 33 communities (21 shown, 12 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `35f0693e`
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
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 17 edges
3. `EventBus` - 10 edges
4. `CLAUDE.md — Reverie Vigil (Phaser 4)` - 8 edges
5. `GameOver` - 7 edges
6. `compilerOptions` - 7 edges
7. `compilerOptions` - 7 edges
8. `Phaser Game Main Menu Screen` - 6 edges
9. `enabledPlugins` - 5 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `React-Phaser Bridge pattern` --rationale_for--> `EventBus (Phaser EventEmitter)`  [INFERRED]
  README.md → src/game/EventBus.ts
- `React-Phaser Bridge pattern` --rationale_for--> `PhaserGame React Bridge Component`  [INFERRED]
  README.md → src/PhaserGame.tsx
- `Anonymous telemetry rationale` --rationale_for--> `log.js anonymous telemetry`  [INFERRED]
  README.md → log.js
- `PhaserGame React Bridge Component` --references--> `'current-scene-ready' event`  [EXTRACTED]
  src/PhaserGame.tsx → src/game/EventBus.ts
- `GameOver Scene` --references--> `'current-scene-ready' event`  [EXTRACTED]
  src/game/scenes/GameOver.ts → src/game/EventBus.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Scene transition lifecycle flow** — boot_scene, preloader_scene, mainmenu_scene, game_scene, gameover_scene [EXTRACTED 1.00]
- **React-Phaser communication bridge** — app_app, phasergame_component, eventbus_eventbus, event_current_scene_ready [INFERRED 0.85]

## Communities (33 total, 12 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (9): EventBus, config, Game, MainMenu, GameOver, config, IProps, IRefPhaserGame (+1 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (16): author, dependencies, graphify, phaser, react, react-dom, description, license (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.50
Nodes (5): 'current-scene-ready' event, EventBus (Phaser EventEmitter), GameOver Scene, PhaserGame React Bridge Component, React-Phaser Bridge pattern

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, terser, @types/react (+5 more)

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

## Knowledge Gaps
- **138 isolated node(s):** `frontend-design@claude-plugins-official`, `playwright@claude-plugins-official`, `typescript-lsp@claude-plugins-official`, `github@claude-plugins-official`, `1. Always navigate the code through Graphiphy first` (+133 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 21` to `Community 17`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `frontend-design@claude-plugins-official`, `playwright@claude-plugins-official`, `typescript-lsp@claude-plugins-official` to the rest of the system?**
  _139 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08636977058029689 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 17` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 20` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._