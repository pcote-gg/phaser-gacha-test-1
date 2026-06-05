import { useEffect, useState } from 'react';
import { useGame } from './GameContext';
import {
    currentHeld,
    dreamsandRatePerMin,
    OFFLINE_CAP_HOURS,
} from '../core/idle/vigil';
import { evaluateTeam, type CaffeineZone } from '../core/brew/caffeine';
import { PlateFrame, Divider, DreamsandIcon } from './Ornaments';
import './vigil.css';

const ZONE_LABEL: Record<CaffeineZone, string> = {
    drowsy: 'Drowsy',
    balanced: 'Balanced',
    overstimulated: 'Overstimulated',
};

/** "3h 12m", "12m 04s", "45s" — coarse, friendly elapsed-time formatting. */
function formatDuration(totalSec: number): string {
    const s = Math.floor(totalSec);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${String(sec).padStart(2, '0')}s`;
    return `${sec}s`;
}

export function VigilScreen() {
    const { state, claim, offline } = useGame();

    // Re-render every second so the held pool ticks up live.
    const [now, setNow] = useState(() => Date.now());
    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);

    // Show the "while you were away" banner once if there was a meaningful offline gain.
    const [showAway, setShowAway] = useState(Math.floor(offline.earned) >= 1);

    const ratePerMin = dreamsandRatePerMin(state);
    const held = currentHeld(state, now);
    const heldWhole = Math.floor(held);
    const { zone } = evaluateTeam(state.team);
    const hasTeam = state.team.length > 0;

    return (
        <>
            <div className="rv-atmosphere" aria-hidden="true" />
            <section className="rv-plate vigil" data-testid="screen-vigil">
                <PlateFrame />

                <header className="vigil__header">
                    <h1 className="rv-title vigil__title">The Vigil</h1>
                    <p className="vigil__flavour">Hold the watch. Harvest the dream’s own sand.</p>
                    <Divider />
                </header>

                {showAway && (
                    <div className="vigil__away" data-testid="vigil-away">
                        <div className="away__text">
                            <span className="away__head">While you held the vigil…</span>
                            <span className="away__sub">
                                over {formatDuration(offline.elapsedSec)}
                                {offline.capped && ` (capped at ${OFFLINE_CAP_HOURS}h)`}
                            </span>
                        </div>
                        <span className="away__earned">
                            <DreamsandIcon className="away__icon" />+{Math.floor(offline.earned).toLocaleString()}
                        </span>
                        <button
                            className="rv-btn--ghost away__dismiss"
                            data-testid="vigil-away-dismiss"
                            onClick={() => setShowAway(false)}
                        >
                            Dismiss
                        </button>
                    </div>
                )}

                <div className="vigil__harvest">
                    <div className="vigil__held">
                        <span className="held__value" data-testid="vigil-held">{heldWhole.toLocaleString()}</span>
                        <span className="held__unit">
                            <DreamsandIcon className="held__icon" /> Dreamsand held
                        </span>
                    </div>

                    <div className="vigil__stats">
                        <div className="vstat">
                            <span className="vstat__label">Rate</span>
                            <span className="vstat__value">{Math.round(ratePerMin).toLocaleString()} / min</span>
                        </div>
                        <div className="vstat">
                            <span className="vstat__label">Team</span>
                            <span className="vstat__value">{state.team.length} · {ZONE_LABEL[zone]}</span>
                        </div>
                        <div className="vstat">
                            <span className="vstat__label">Banked</span>
                            <span className="vstat__value" data-testid="vigil-banked">
                                {Math.floor(state.currencies.dreamsand).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <button
                        className="rv-btn vigil__claim"
                        data-testid="vigil-claim"
                        disabled={heldWhole < 1}
                        onClick={() => claim()}
                    >
                        {heldWhole < 1 ? (
                            'Nothing to claim yet'
                        ) : (
                            <>
                                Claim {heldWhole.toLocaleString()}
                                <DreamsandIcon className="claim__icon" />
                            </>
                        )}
                    </button>
                </div>

                {!hasTeam ? (
                    <p className="vigil__hint">
                        No watchers on duty. Assemble a team in <strong>The Brew</strong> to begin the vigil.
                    </p>
                ) : (
                    <p className="vigil__hint">
                        The team generates Dreamsand even while you’re away, up to {OFFLINE_CAP_HOURS} hours.
                        A <strong>Balanced</strong> Caffeine Gauge earns the most.
                    </p>
                )}
            </section>
        </>
    );
}
