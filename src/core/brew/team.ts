import type { GameState } from '../state/gameState';
import { TEAM_SIZE } from './caffeine';

/**
 * Team composition rules for The Brew (GDD §7B). These keep the active team
 * (`GameState.team`) valid: only owned characters, no duplicates, never more
 * than `TEAM_SIZE` slots. Like `performPull`, the mutating helpers change
 * `state` in place and return whether anything actually changed, so the UI can
 * skip a re-render/save on a no-op.
 *
 * Pure logic — no engine or React imports allowed in `core/`.
 */

/** Whether the player owns this character. */
function owns(state: GameState, id: string): boolean {
    return state.roster.some((c) => c.id === id);
}

/** Whether this character is currently on the active team. */
export function isInTeam(state: GameState, id: string): boolean {
    return state.team.includes(id);
}

/** Whether the team is full (all slots used). */
export function isTeamFull(state: GameState): boolean {
    return state.team.length >= TEAM_SIZE;
}

/** Whether `id` could be added to the team right now. */
export function canAddToTeam(state: GameState, id: string): boolean {
    return owns(state, id) && !isInTeam(state, id) && !isTeamFull(state);
}

/** Adds a character to the team if allowed. Returns true if the team changed. */
export function addToTeam(state: GameState, id: string): boolean {
    if (!canAddToTeam(state, id)) return false;
    state.team.push(id);
    return true;
}

/** Removes a character from the team. Returns true if the team changed. */
export function removeFromTeam(state: GameState, id: string): boolean {
    const i = state.team.indexOf(id);
    if (i === -1) return false;
    state.team.splice(i, 1);
    return true;
}

/**
 * Toggles a character's team membership: removes it if present, otherwise adds
 * it (when there is room and the player owns it). Returns true if the team
 * changed — adding a member to a full team is a no-op and returns false.
 */
export function toggleTeamMember(state: GameState, id: string): boolean {
    return isInTeam(state, id)
        ? removeFromTeam(state, id)
        : addToTeam(state, id);
}
