import { GameState, SAVE_VERSION, newGame } from './gameState';

/** localStorage key under which the single save slot is stored. */
const SAVE_KEY = 'reverie-vigil:save';

/**
 * Steps an older save forward one schema version at a time. Each `case` brings
 * the data from version N to N+1; execution falls through so a very old save
 * walks every step up to the current version. Returns null if the save is too
 * new (from a future version) to understand.
 */
function migrate(data: GameState): GameState | null {
    if (data.version > SAVE_VERSION) return null; // can't downgrade
    /* eslint-disable no-fallthrough */
    switch (data.version) {
        case 2:
            // v3 added The Vigil's unclaimed Dreamsand pool (GDD §6).
            data.heldDreamsand = 0;
            data.version = 3;
        // falls through to pick up any later migrations
    }
    /* eslint-enable no-fallthrough */
    return data.version === SAVE_VERSION ? data : null;
}

/**
 * Loads the saved game. Returns a fresh game when there is no save, when the
 * save is unreadable, or when it cannot be migrated to the current schema.
 */
export function loadGame(): GameState {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return newGame();

        const data = JSON.parse(raw) as GameState;
        if (data.version === SAVE_VERSION) return data;

        return migrate(data) ?? newGame();
    } catch {
        // Corrupt JSON or localStorage unavailable — fail soft to a new game.
        return newGame();
    }
}

/**
 * Persists the game state, stamping the save time. Fails soft if localStorage
 * is unavailable (e.g. private browsing or quota exceeded) so the game never
 * crashes on a failed save.
 */
export function saveGame(state: GameState): void {
    try {
        const payload: GameState = { ...state, lastSeen: Date.now() };
        localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
    } catch {
        // Intentionally ignored for the MVP — see above.
    }
}

/** Deletes the save slot. Used for "reset progress" / testing. */
export function clearSave(): void {
    try {
        localStorage.removeItem(SAVE_KEY);
    } catch {
        // Ignored — nothing to do if storage is unavailable.
    }
}
