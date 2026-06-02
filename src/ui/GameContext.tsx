import { createContext, useContext, useReducer, useRef } from 'react';
import type { ReactNode } from 'react';
import type { GameState } from '../core/state/gameState';
import { loadGame, saveGame } from '../core/state/save';
import { performPull } from '../core/gacha/pull';
import type { PullResult } from '../core/gacha/pull';
import type { BannerConfig } from '../core/gacha/banner';
import { toggleTeamMember } from '../core/brew/team';
import { settle, claimDreamsand } from '../core/idle/vigil';
import type { AccrualResult } from '../core/idle/vigil';
import { completeFragment } from '../core/fragments/progress';
import type { FragmentReward } from '../core/content/fragments';

/**
 * Thin bridge between the pure core game state and React. It holds the single
 * GameState, persists it after every change, and exposes actions the UI calls.
 * The core stays engine-agnostic; this is the only place React touches it.
 */
interface GameApi {
    state: GameState;
    pull: (banner: BannerConfig, count: number) => PullResult;
    /** Adds or removes a character from the active Brew team (GDD §7B). */
    toggleTeam: (characterId: string) => void;
    /** Banks held Dreamsand into the spendable balance; returns the amount claimed (GDD §6). */
    claim: () => number;
    /** Dreamsand accrued while the player was away, computed once on load (for the "while away" banner). */
    offline: AccrualResult;
    /** Dev helper to grant Tolls until they are earnable through gameplay. */
    grantTolls: (amount: number) => void;
    /**
     * Marks a Dream Fragment finished and banks its one-time reward (GDD §7A).
     * Returns the reward granted, or null if it was already completed.
     */
    finishFragment: (fragmentId: string) => FragmentReward | null;
}

const GameContext = createContext<GameApi | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
    const stateRef = useRef<GameState>(loadGame());
    const [, rerender] = useReducer((n: number) => n + 1, 0);

    // Settle offline accumulation exactly once on load: bank what the team earned
    // while away into the held pool, and remember the summary for the UI banner.
    const offlineRef = useRef<AccrualResult | null>(null);
    if (offlineRef.current === null) {
        offlineRef.current = settle(stateRef.current, Date.now());
        saveGame(stateRef.current);
    }

    const pull = (banner: BannerConfig, count: number) => {
        const result = performPull(stateRef.current, banner, count, Math.random);
        saveGame(stateRef.current);
        rerender();
        return result;
    };

    const toggleTeam = (characterId: string) => {
        // Bank accrual at the current rate BEFORE the team (and thus the rate) changes,
        // so elapsed time is credited at the rate that actually applied during it.
        settle(stateRef.current, Date.now());
        toggleTeamMember(stateRef.current, characterId); // no-op when team full / not owned
        saveGame(stateRef.current);
        rerender();
    };

    const claim = () => {
        const amount = claimDreamsand(stateRef.current, Date.now());
        saveGame(stateRef.current);
        rerender();
        return amount;
    };

    const grantTolls = (amount: number) => {
        stateRef.current.currencies.tolls += amount;
        saveGame(stateRef.current);
        rerender();
    };

    const finishFragment = (fragmentId: string) => {
        const reward = completeFragment(stateRef.current, fragmentId);
        if (reward) {
            saveGame(stateRef.current);
            rerender();
        }
        return reward;
    };

    return (
        <GameContext.Provider
            value={{
                state: stateRef.current,
                pull,
                toggleTeam,
                claim,
                offline: offlineRef.current,
                grantTolls,
                finishFragment,
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export function useGame(): GameApi {
    const ctx = useContext(GameContext);
    if (!ctx) throw new Error('useGame must be used within a GameProvider');
    return ctx;
}
