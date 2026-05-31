# Graph Report - .  (2026-05-31)

## Corpus Check
- Corpus is ~35,193 words - fits in a single context window. You may not need a graph.

## Summary
- 166 nodes · 192 edges · 18 communities (14 shown, 4 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.84)
- Token cost: 91,824 input · 16,209 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Phaser Scenes & EventBus|Phaser Scenes & EventBus]]
- [[_COMMUNITY_Package Manifest & Deps|Package Manifest & Deps]]
- [[_COMMUNITY_TypeScript App Config|TypeScript App Config]]
- [[_COMMUNITY_React-Phaser Bridge Architecture|React-Phaser Bridge Architecture]]
- [[_COMMUNITY_Build & Dev Tooling|Build & Dev Tooling]]
- [[_COMMUNITY_Main Menu UI (Screenshot)|Main Menu UI (Screenshot)]]
- [[_COMMUNITY_TypeScript Node Config|TypeScript Node Config]]
- [[_COMMUNITY_Background Sky Asset|Background Sky Asset]]
- [[_COMMUNITY_Phaser Logo Wordmark|Phaser Logo Wordmark]]
- [[_COMMUNITY_Preloader Scene|Preloader Scene]]
- [[_COMMUNITY_Star Sprite Asset|Star Sprite Asset]]
- [[_COMMUNITY_Favicon Branding|Favicon Branding]]
- [[_COMMUNITY_Telemetry Script (log.js)|Telemetry Script (log.js)]]
- [[_COMMUNITY_Telemetry Rationale|Telemetry Rationale]]
- [[_COMMUNITY_Phasermsg Vite Plugin|Phasermsg Vite Plugin]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `MainMenu Scene` - 8 edges
3. `compilerOptions` - 7 edges
4. `MainMenu` - 7 edges
5. `Preloader` - 6 edges
6. `App React Component` - 6 edges
7. `Phaser GameConfig (scene list)` - 6 edges
8. `Preloader Scene` - 6 edges
9. `'current-scene-ready' event` - 6 edges
10. `Phaser Game Main Menu Screen` - 6 edges

## Surprising Connections (you probably didn't know these)
- `React-Phaser Bridge pattern` --rationale_for--> `EventBus (Phaser EventEmitter)`  [INFERRED]
  README.md → src/game/EventBus.ts
- `React-Phaser Bridge pattern` --rationale_for--> `PhaserGame React Bridge Component`  [INFERRED]
  README.md → src/PhaserGame.tsx
- `React entry point (main.tsx)` --shares_data_with--> `index.html (#root mount)`  [INFERRED]
  src/main.tsx → index.html
- `Anonymous telemetry rationale` --rationale_for--> `log.js anonymous telemetry`  [INFERRED]
  README.md → log.js
- `App React Component` --shares_data_with--> `PhaserGame React Bridge Component`  [INFERRED]
  src/App.tsx → src/PhaserGame.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Scene transition lifecycle flow** — boot_scene, preloader_scene, mainmenu_scene, game_scene, gameover_scene [EXTRACTED 1.00]
- **React-Phaser communication bridge** — app_app, phasergame_component, eventbus_eventbus, event_current_scene_ready [INFERRED 0.85]

## Communities (18 total, 4 thin omitted)

### Community 0 - "Phaser Scenes & EventBus"
Cohesion: 0.09
Nodes (9): EventBus, config, Boot, Game, GameOver, MainMenu, IProps, IRefPhaserGame (+1 more)

### Community 1 - "Package Manifest & Deps"
Cohesion: 0.08
Nodes (23): author, bugs, url, dependencies, graphify, phaser, react, react-dom (+15 more)

### Community 2 - "TypeScript App Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+11 more)

### Community 3 - "React-Phaser Bridge Architecture"
Cohesion: 0.22
Nodes (18): App React Component, 'background' image asset, 'logo' image asset, 'star' image asset, Boot Scene, 'current-scene-ready' event, EventBus (Phaser EventEmitter), Game Scene (+10 more)

### Community 4 - "Build & Dev Tooling"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, terser, @types/react (+5 more)

### Community 5 - "Main Menu UI (Screenshot)"
Cohesion: 0.29
Nodes (10): Add New Sprite Button, Change Scene Button, Right-Side Debug Control Panel, Blue Gradient Background, Main Menu Text Label, Phaser Logo Title, Phaser Game Main Menu Screen, Sprite Position Control (+2 more)

### Community 6 - "TypeScript Node Config"
Cohesion: 0.22
Nodes (8): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, include

### Community 7 - "Background Sky Asset"
Cohesion: 0.40
Nodes (6): Azure Blue (Top), Game Background Asset, Vertical Blue Gradient, Cyan Aqua (Bottom), Minimal Flat Style, Sky Motif

### Community 8 - "Phaser Logo Wordmark"
Cohesion: 0.47
Nodes (6): Light Blue Gradient Fill, Bold Angular Block Typeface, Chrome Diagonal-Stripe Style, Phaser Logo, Phaser Game Framework, PHASER Wordmark

### Community 10 - "Star Sprite Asset"
Cohesion: 0.40
Nodes (6): Five-Pointed Star Shape, Game Sprite Asset, Glossy Cartoon Style, Golden Yellow Color, Reward / Collectible Icon, Golden Star Sprite

### Community 11 - "Favicon Branding"
Cohesion: 0.67
Nodes (4): Browser Tab Branding, Colorful Pixel Character Motif, Phaser Gacha Game, Favicon Icon

## Knowledge Gaps
- **73 isolated node(s):** `fs`, `https`, `name`, `description`, `version` (+68 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Build & Dev Tooling` to `Package Manifest & Deps`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **What connects `fs`, `https`, `name` to the rest of the system?**
  _74 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Phaser Scenes & EventBus` be split into smaller, more focused modules?**
  _Cohesion score 0.08901515151515152 - nodes in this community are weakly interconnected._
- **Should `Package Manifest & Deps` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `TypeScript App Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._