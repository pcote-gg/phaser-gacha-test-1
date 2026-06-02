import { useGame } from './GameContext';
import { getCharacter } from '../core/content/characters';
import {
    TEAM_SIZE,
    CAFFEINE_THRESHOLDS,
    evaluateTeam,
    type CaffeineZone,
} from '../core/brew/caffeine';
import type { Rarity } from '../core/types';
import './brew.css';

const RARITY_LABEL: Record<Rarity, string> = {
    common: 'Common',
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary',
    mythic: 'Mythic',
};

/** Flavour + plain-language effect copy per zone, shown under the gauge. */
const ZONE_COPY: Record<CaffeineZone, { name: string; blurb: string }> = {
    drowsy: {
        name: 'Drowsy',
        blurb: 'Sluggish — idle combat runs at reduced efficiency. Brew something stronger.',
    },
    balanced: {
        name: 'Balanced',
        blurb: 'The sweet spot. Full efficiency, and the dream rewards your restraint.',
    },
    overstimulated: {
        name: 'Overstimulated',
        blurb: 'Wired and volatile — bigger swings, higher highs and lower lows.',
    },
};

/**
 * The far-right end of the gauge for display only (the real zones are driven by
 * CAFFEINE_THRESHOLDS). Headroom above balancedMax keeps the Overstimulated band
 * and marker visible rather than pinned to the edge.
 */
const GAUGE_MAX = CAFFEINE_THRESHOLDS.balancedMax + 80;

function pctOfGauge(value: number): number {
    return Math.max(0, Math.min(100, (value / GAUGE_MAX) * 100));
}

export function BrewScreen() {
    const { state, toggleTeam } = useGame();

    const { total, zone, effect } = evaluateTeam(state.team);
    const teamFull = state.team.length >= TEAM_SIZE;

    // Band edges as percentages of the display gauge.
    const drowsyEnd = pctOfGauge(CAFFEINE_THRESHOLDS.balancedMin);
    const balancedEnd = pctOfGauge(CAFFEINE_THRESHOLDS.balancedMax);

    return (
        <div className="brew">
            <h1 className="brew__title">The Brew</h1>
            <p className="brew__flavour">Assemble the team. Set the gauge. Begin the watch.</p>

            {/* Caffeine Gauge */}
            <div className={`brew__gauge brew__gauge--${zone}`}>
                <div className="gauge__track">
                    <span className="gauge__band gauge__band--drowsy" style={{ width: `${drowsyEnd}%` }} />
                    <span
                        className="gauge__band gauge__band--balanced"
                        style={{ width: `${balancedEnd - drowsyEnd}%` }}
                    />
                    <span
                        className="gauge__band gauge__band--overstimulated"
                        style={{ width: `${100 - balancedEnd}%` }}
                    />
                    <span className="gauge__marker" style={{ left: `${pctOfGauge(total)}%` }} />
                </div>
                <div className="gauge__readout">
                    <span className="gauge__zone">{ZONE_COPY[zone].name}</span>
                    <span className="gauge__value">{total} caffeine</span>
                </div>
                <p className="gauge__blurb">{ZONE_COPY[zone].blurb}</p>
                <div className="gauge__effects">
                    <span>Combat ×{effect.combatEfficiency.toFixed(2)}</span>
                    {effect.volatility > 0 && <span>Volatile</span>}
                    {effect.bonusRewards && <span>Bonus rewards</span>}
                </div>
            </div>

            {/* Active team slots */}
            <div className="brew__team">
                {Array.from({ length: TEAM_SIZE }).map((_, i) => {
                    const id = state.team[i];
                    const def = id ? getCharacter(id) : undefined;
                    return (
                        <button
                            key={i}
                            className={`slot ${def ? `slot--filled draw--${def.rarity}` : 'slot--empty'}`}
                            disabled={!def}
                            onClick={() => def && toggleTeam(def.id)}
                            title={def ? `Remove ${def.name}` : 'Empty slot'}
                        >
                            {def ? (
                                <>
                                    <span className="slot__name">{def.name}</span>
                                    <span className="slot__caf">{def.caffeine}</span>
                                </>
                            ) : (
                                <span className="slot__empty-label">+</span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Owned roster picker */}
            {state.roster.length === 0 ? (
                <p className="brew__empty">
                    No characters yet. Ring the bell on the Standard banner to wake your first sleeper.
                </p>
            ) : (
                <ul className="brew__roster">
                    {state.roster.map((owned) => {
                        const def = getCharacter(owned.id);
                        if (!def) return null;
                        const inTeam = state.team.includes(owned.id);
                        const disabled = !inTeam && teamFull;
                        return (
                            <li key={owned.id}>
                                <button
                                    className={`card draw--${def.rarity} ${inTeam ? 'card--in-team' : ''}`}
                                    disabled={disabled}
                                    onClick={() => toggleTeam(owned.id)}
                                    title={
                                        inTeam
                                            ? `Remove ${def.name} from team`
                                            : disabled
                                              ? 'Team is full'
                                              : `Add ${def.name} to team`
                                    }
                                >
                                    <span className="card__top">
                                        <span className="card__name">{def.name}</span>
                                        {inTeam && <span className="card__check">✓</span>}
                                    </span>
                                    <span className="card__meta">
                                        <span className="card__tier">{RARITY_LABEL[def.rarity]}</span>
                                        <span className="card__caf">☕ {def.caffeine}</span>
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
