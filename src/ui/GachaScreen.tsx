import { useState } from 'react';
import { useGame } from './GameContext';
import { STANDARD_BANNER } from '../core/gacha/banner';
import { canPull, pullCost } from '../core/gacha/pull';
import type { PullResult } from '../core/gacha/pull';
import { getCharacter } from '../core/content/characters';
import type { Rarity } from '../core/types';
import { PlateFrame, Divider, BellIcon } from './Ornaments';
import './gacha.css';

const RARITY_LABEL: Record<Rarity, string> = {
    common: 'Common',
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary',
    mythic: 'Mythic',
};

function pct(v: number | undefined): string {
    return v === undefined ? '—' : `${Math.round(v * 100)}%`;
}

export function GachaScreen() {
    const { state, pull, grantTolls } = useGame();
    const [last, setLast] = useState<PullResult | null>(null);

    const banner = STANDARD_BANNER;
    const pity = state.pity[banner.pityGroup] ?? 0;

    const doPull = (count: number) => {
        if (!canPull(state, count)) return;
        setLast(pull(banner, count));
    };

    return (
        <>
            <div className="rv-atmosphere" aria-hidden="true" />
            <section className="rv-plate gacha" data-testid="screen-gacha">
                <PlateFrame />

                <header className="gacha__header">
                    <h1 className="rv-title gacha__title">{banner.name}</h1>
                    <p className="gacha__flavour">Ring the bell. Wake the sleeper.</p>
                    <Divider />
                </header>

                <div className="gacha__stats">
                    <div className="gstat">
                        <span className="gstat__value">
                            <BellIcon className="gstat__icon" />
                            <span data-testid="gacha-tolls">{state.currencies.tolls}</span>
                        </span>
                        <span className="gstat__label">Tolls</span>
                    </div>
                    <div className="gstat">
                        <span className="gstat__value">
                            <span data-testid="gacha-pity">{pity}</span>
                            <span className="gstat__sub"> / {banner.hardPity}</span>
                        </span>
                        <span className="gstat__label">Pity</span>
                    </div>
                    <div className="gstat">
                        <span className="gstat__value" data-testid="gacha-roster">{state.roster.length}</span>
                        <span className="gstat__label">Awake</span>
                    </div>
                </div>

                <div className="gacha__buttons">
                    <button
                        className="rv-btn gacha__ring gacha__ring--ten"
                        data-testid="gacha-ring-10"
                        disabled={!canPull(state, 10)}
                        onClick={() => doPull(10)}
                    >
                        Ring ×10
                        <span className="gacha__cost"><BellIcon className="gacha__cost-icon" />{pullCost(10)}</span>
                    </button>
                    <button
                        className="rv-btn gacha__ring"
                        data-testid="gacha-ring-1"
                        disabled={!canPull(state, 1)}
                        onClick={() => doPull(1)}
                    >
                        Ring ×1
                        <span className="gacha__cost"><BellIcon className="gacha__cost-icon" />{pullCost(1)}</span>
                    </button>
                    <button className="rv-btn--ghost gacha__dev" data-testid="gacha-grant" onClick={() => grantTolls(10)}>
                        +10 Tolls (dev)
                    </button>
                </div>

                {last && (
                    <ul className="gacha__results" data-testid="gacha-results">
                        {last.draws.map((d, i) => {
                            const def = getCharacter(d.characterId);
                            return (
                                <li
                                    key={i}
                                    className={`gdraw draw--${d.rarity}`}
                                    style={{ animationDelay: `${i * 45}ms` }}
                                >
                                    <span className="rv-gem gdraw__gem" />
                                    <span className="gdraw__name">{def?.name ?? d.characterId}</span>
                                    <span className="gdraw__tier">{RARITY_LABEL[d.rarity]}</span>
                                    <span className="gdraw__tag">
                                        {d.isNew ? 'New' : `+${d.flicker} Flicker`}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                )}

                <details className="gacha__rates">
                    <summary>Rates &amp; pity</summary>
                    <ul>
                        <li>Epic — {pct(banner.baseRates.epic)} (guaranteed by pull {banner.hardPity})</li>
                        <li>Rare — {pct(banner.baseRates.rare)}</li>
                        <li>Common — {pct(banner.baseRates.common)}</li>
                        <li>Epic rate climbs from pull {banner.softPity} (soft pity).</li>
                    </ul>
                </details>
            </section>
        </>
    );
}
