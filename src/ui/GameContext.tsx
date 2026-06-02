import { createContext, useContext, useReducer, useRef } from 'react';
import type { ReactNode } from 'react';
import type { GameState } from '../core/state/gameState';
import { loadGame, saveGame } from '../core/state/save';
import { performPull } from '../core/gacha/pull';
import type { PullResult } from '../core/gacha/pull';
import type { BannerConfig } from '../core/gacha/banner';
import { toggleTeamMember } from '../core/brew/team';

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
    /** Dev helper to grant Tolls until they are earnable through gameplay. */
    grantTolls: (amount: number) => void;
}

const GameContext = createContext<GameApi | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
    const stateRef = useRef<GameState>(loadGame());
    const [, rerender] = useReducer((n: number) => n + 1, 0);

    const pull = (banner: BannerConfig, count: number) => {
        const result = performPull(stateRef.current, banner, count, Math.random);
        saveGame(stateRef.current);
        rerender();
        return result;
    };

    const toggleTeam = (characterId: string) => {
        if (!toggleTeamMember(stateRef.current, characterId)) return; // no-op (team full / not owned)
        saveGame(stateRef.current);
        rerender();
    };

    const grantTolls = (amount: number) => {
        stateRef.current.currencies.tolls += amount;
        saveGame(stateRef.current);
        rerender();
    };

    return (
        <GameContext.Provider value={{ state: stateRef.current, pull, toggleTeam, grantTolls }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame(): GameApi {
    const ctx = useContext(GameContext);
    if (!ctx) throw new Error('useGame must be used within a GameProvider');
    return ctx;
}
