import { useState } from 'react';
import { useGame } from './GameContext';
import { STANDARD_BANNER } from '../core/gacha/banner';
import { canPull, pullCost } from '../core/gacha/pull';
import type { PullResult } from '../core/gacha/pull';
import { getCharacter } from '../core/content/characters';
import type { Rarity } from '../core/types';
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
        <div className="gacha">
            <h1 className="gacha__title">{banner.name}</h1>
            <p className="gacha__flavour">Ring the bell. Wake the sleeper.</p>

            <div className="gacha__stats">
                <span>Tolls: <strong>{state.currencies.tolls}</strong></span>
                <span>Pity: <strong>{pity}</strong> / {banner.hardPity}</span>
                <span>Roster: <strong>{state.roster.length}</strong></span>
            </div>

            <div className="gacha__buttons">
                <button disabled={!canPull(state, 1)} onClick={() => doPull(1)}>
                    Ring ×1 ({pullCost(1)} Toll)
                </button>
                <button disabled={!canPull(state, 10)} onClick={() => doPull(10)}>
                    Ring ×10 ({pullCost(10)} Tolls)
                </button>
                <button className="gacha__dev" onClick={() => grantTolls(10)}>
                    +10 Tolls (dev)
                </button>
            </div>

            {last && (
                <ul className="gacha__results">
                    {last.draws.map((d, i) => {
                        const def = getCharacter(d.characterId);
                        return (
                            <li key={i} className={`draw draw--${d.rarity}`}>
                                <span className="draw__name">{def?.name ?? d.characterId}</span>
                                <span className="draw__tier">{RARITY_LABEL[d.rarity]}</span>
                                <span className="draw__tag">
                                    {d.isNew
                                        ? 'NEW'
                                        : `+${d.flicker} ${RARITY_LABEL[d.rarity]} Flicker`}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            )}

            <details className="gacha__rates">
                <summary>Rates</summary>
                <ul>
                    <li>Epic — {pct(banner.baseRates.epic)} (guaranteed by pull {banner.hardPity})</li>
                    <li>Rare — {pct(banner.baseRates.rare)}</li>
                    <li>Common — {pct(banner.baseRates.common)}</li>
                    <li>Epic rate climbs from pull {banner.softPity} (soft pity).</li>
                </ul>
            </details>
        </div>
    );
}
