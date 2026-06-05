import { useGame } from './GameContext';
import { getCharacter } from '../core/content/characters';
import { effectiveStats, quoteLevelUp } from '../core/progress/leveling';
import type { Rarity } from '../core/types';
import { PlateFrame, Divider, DreamsandIcon, CaffeineIcon } from './Ornaments';
import './roster.css';

const RARITY_LABEL: Record<Rarity, string> = {
    common: 'Common',
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary',
    mythic: 'Mythic',
};

/**
 * The Awake — view every character the player owns and spend Dreamsand to raise
 * their levels (GDD §6 daily loop / §Character Progression). Levelling here feeds
 * straight back into The Vigil's idle rate, closing the core loop.
 */
export function RosterScreen() {
    const { state, levelUp } = useGame();
    const dreamsand = Math.floor(state.currencies.dreamsand);

    return (
        <>
            <div className="rv-atmosphere" aria-hidden="true" />
            <section className="rv-plate roster" data-testid="screen-roster">
                <PlateFrame />

                <header className="roster__header">
                    <h1 className="rv-title roster__title">The Awake</h1>
                    <p className="roster__balance">
                        <DreamsandIcon className="roster__sand-icon" />
                        <span className="roster__sand" data-testid="roster-dreamsand">{dreamsand.toLocaleString()}</span>
                        <span className="roster__sand-unit">Dreamsand</span>
                    </p>
                    <Divider />
                </header>

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
                                <li key={owned.id} data-testid={`roster-unit-${owned.id}`} className={`unit draw--${def.rarity}`}>
                                    <div className="unit__head">
                                        <span className="rv-gem" />
                                        <span className="unit__name">{def.name}</span>
                                        <span className="unit__tier">{RARITY_LABEL[def.rarity]}</span>
                                    </div>
                                    <div className="unit__level">
                                        <span className="unit__level-k">Lv</span>
                                        <span data-testid={`roster-level-${owned.id}`}>{owned.level}</span>
                                        <span className="unit__cap">/ {quote.cap}</span>
                                    </div>
                                    <div className="unit__stats">
                                        <span className="ustat"><span className="ustat__k">HP</span>{stats.hp.toLocaleString()}</span>
                                        <span className="ustat"><span className="ustat__k">ATK</span>{stats.atk.toLocaleString()}</span>
                                        <span className="ustat ustat--caf">
                                            <CaffeineIcon className="ustat__icon" />{def.caffeine}
                                        </span>
                                    </div>
                                    <button
                                        className="rv-btn unit__levelup"
                                        data-testid={`roster-levelup-${owned.id}`}
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
                                                <span className="unit__cost">
                                                    <DreamsandIcon className="unit__cost-icon" />{quote.cost}
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </section>
        </>
    );
}
