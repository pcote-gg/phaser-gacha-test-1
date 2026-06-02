import type { GameState } from '../state/gameState';
import { getFragment, type FragmentReward } from '../content/fragments';

/**
 * Dream Fragment progress — which episodes the player has completed, and the
 * one-time reward grant on first completion (GDD §7A). Pure logic over
 * GameState: no engine/React imports, no RNG.
 */

/** True if the player has already finished this fragment. */
export function isFragmentCompleted(state: GameState, id: string): boolean {
    return state.completedFragments.includes(id);
}

/**
 * Marks a fragment complete and grants its reward — but only the first time.
 * Returns the reward that was granted, or `null` if the fragment was already
 * completed (or its id is unknown), so the caller can show a one-time reward
 * card without re-granting on replay. Mutates `state`.
 */
export function completeFragment(state: GameState, id: string): FragmentReward | null {
    if (isFragmentCompleted(state, id)) return null;

    const def = getFragment(id);
    if (!def) return null;

    state.completedFragments.push(id);

    const { tolls = 0, dreamsand = 0 } = def.reward;
    state.currencies.tolls += tolls;
    state.currencies.dreamsand += dreamsand;

    return def.reward;
}
