import { useGame } from './GameContext';
import { getCharacter } from '../core/content/characters';
import {
    TEAM_SIZE,
    CAFFEINE_THRESHOLDS,
    evaluateTeam,
    type CaffeineZone,
} from '../core/brew/caffeine';
import type { Rarity } from '../core/types';
import { PlateFrame, Divider, CaffeineIcon } from './Ornaments';
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
        <>
            <div className="rv-atmosphere" aria-hidden="true" />
            <section className="rv-plate brew" data-testid="screen-brew">
                <PlateFrame />

                <header className="brew__header">
                    <h1 className="rv-title brew__title">The Brew</h1>
                    <p className="brew__flavour">Assemble the team. Set the gauge. Begin the watch.</p>
                </header>

                {/* Caffeine Gauge */}
                <div className={`brew__gauge brew__gauge--${zone}`}>
                    <div className="gauge__readout">
                        <span className="gauge__zone" data-testid="brew-zone">{ZONE_COPY[zone].name}</span>
                        <span className="gauge__value" data-testid="brew-caffeine">{total} caffeine</span>
                    </div>
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
                    <p className="gauge__blurb">{ZONE_COPY[zone].blurb}</p>
                    <div className="gauge__effects">
                        <span className="gauge__chip">Combat ×{effect.combatEfficiency.toFixed(2)}</span>
                        {effect.volatility > 0 && <span className="gauge__chip">Volatile</span>}
                        {effect.bonusRewards && <span className="gauge__chip gauge__chip--bonus">Bonus rewards</span>}
                    </div>
                </div>

                <Divider />

                {/* Active team slots */}
                <div className="brew__team">
                    {Array.from({ length: TEAM_SIZE }).map((_, i) => {
                        const id = state.team[i];
                        const def = id ? getCharacter(id) : undefined;
                        return (
                            <button
                                key={i}
                                data-testid={`brew-slot-${i}`}
                                className={`brew-slot ${def ? `brew-slot--filled draw--${def.rarity}` : 'brew-slot--empty'}`}
                                disabled={!def}
                                onClick={() => def && toggleTeam(def.id)}
                                title={def ? `Remove ${def.name}` : 'Empty slot'}
                            >
                                {def ? (
                                    <>
                                        <span className="rv-gem brew-slot__gem" />
                                        <span className="brew-slot__name">{def.name}</span>
                                        <span className="brew-slot__caf">
                                            <CaffeineIcon className="brew-slot__caf-icon" />
                                            {def.caffeine}
                                        </span>
                                    </>
                                ) : (
                                    <span className="brew-slot__plus">+</span>
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
                                        data-testid={`brew-card-${owned.id}`}
                                        className={`brew-card draw--${def.rarity} ${inTeam ? 'brew-card--in' : ''}`}
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
                                        <span className="brew-card__top">
                                            <span className="brew-card__name">
                                                <span className="rv-gem" />
                                                {def.name}
                                            </span>
                                            {inTeam && <span className="brew-card__check">✓</span>}
                                        </span>
                                        <span className="brew-card__meta">
                                            <span className="brew-card__tier">{RARITY_LABEL[def.rarity]}</span>
                                            <span className="brew-card__caf">
                                                <CaffeineIcon className="brew-card__caf-icon" />
                                                {def.caffeine}
                                            </span>
                                        </span>
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
