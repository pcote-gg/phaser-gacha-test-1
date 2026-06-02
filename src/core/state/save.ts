import { GameState, SAVE_VERSION, newGame } from './gameState';

/** localStorage key under which the single save slot is stored. */
const SAVE_KEY = 'reverie-vigil:save';

/**
 * Loads the saved game. Returns a fresh game when there is no save, when the
 * save is from an incompatible schema version, or when it is unreadable.
 *
 * No migrations exist yet, so a version mismatch starts fresh. When the schema
 * changes for real, add migration steps here before the version check.
 */
export function loadGame(): GameState {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return newGame();

        const data = JSON.parse(raw) as GameState;
        if (data.version !== SAVE_VERSION) return newGame();

        return data;
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
