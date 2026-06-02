import { useGame } from './GameContext';
import { getCharacter } from '../core/content/characters';
import { effectiveStats, quoteLevelUp } from '../core/progress/leveling';
import type { Rarity } from '../core/types';
import './roster.css';

const RARITY_LABEL: Record<Rarity, string> = {
    common: 'Common',
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary',
    mythic: 'Mythic',
};

/**
 * The Roster — view every character the player owns and spend Dreamsand to raise
 * their levels (GDD §6 daily loop / §Character Progression). Levelling here feeds
 * straight back into The Vigil's idle rate, closing the core loop.
 */
export function RosterScreen() {
    const { state, levelUp } = useGame();
    const dreamsand = Math.floor(state.currencies.dreamsand);

    return (
        <div className="roster">
            <h1 className="roster__title">The Awake</h1>
            <p className="roster__balance">
                <span className="roster__sand">◇ {dreamsand.toLocaleString()}</span> Dreamsand
            </p>

            {state.roster.length === 0 ? (
                <p className="roster__empty">
                    No characters yet. Ring the bell on the Standard banner to wake your first sleeper.
                </p>
            ) : (
                <ul className="roster__list">
                    {state.roster.map((owned) => {
                        const def = getCharacter(owned.id);
                        if (!def) return null;
                        const quote = quoteLevelUp(state, owned.id);
                        const stats = effectiveStats(def, owned.level);
                        const maxed = quote.block === 'at-cap';

                        return (
                            <li key={owned.id} className={`unit draw--${def.rarity}`}>
                                <div className="unit__head">
                                    <span className="unit__name">{def.name}</span>
                                    <span className="unit__tier">{RARITY_LABEL[def.rarity]}</span>
                                </div>
                                <div className="unit__level">
                                    Lv {owned.level}
                                    <span className="unit__cap"> / {quote.cap}</span>
                                </div>
                                <div className="unit__stats">
                                    <span>♥ {stats.hp.toLocaleString()}</span>
                                    <span>⚔ {stats.atk.toLocaleString()}</span>
                                    <span className="unit__caf">☕ {def.caffeine}</span>
                                </div>
                                <button
                                    className="unit__levelup"
                                    disabled={!quote.ok}
                                    onClick={() => levelUp(owned.id)}
                                    title={
                                        maxed
                                            ? 'Fully awakened — at level cap'
                                            : quote.block === 'insufficient-dreamsand'
                                              ? 'Not enough Dreamsand'
                                              : `Level up for ${quote.cost} Dreamsand`
                                    }
                                >
                                    {maxed ? (
                                        'Maxed'
                                    ) : (
                                        <>
                                            Level Up
                                            <span className="unit__cost">◇ {quote.cost}</span>
                                        </>
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}