import { useState } from 'react';
import { useGame } from './GameContext';
import {
    allFragments,
    type FragmentDef,
    type FragmentReward,
} from '../core/content/fragments';
import { isFragmentCompleted } from '../core/fragments/progress';
import { PlateFrame, Divider, Fleuron, BellIcon, DreamsandIcon } from './Ornaments';
import './fragments.css';

const TYPE_LABEL: Record<FragmentDef['type'], string> = {
    world: 'World',
    character: 'Character',
    event: 'Event',
};

/** The one-time reward, drawn as in-world chips (a bell for Tolls, sand for
 *  Dreamsand). Keeps the literal "+N" text the e2e reward assertions look for. */
function RewardChips({ reward, className }: { reward: FragmentReward; className?: string }) {
    return (
        <span className={`reward-chips${className ? ` ${className}` : ''}`}>
            {reward.tolls ? (
                <span className="reward-chip reward-chip--tolls">
                    <BellIcon className="reward-chip__icon" />+{reward.tolls}
                </span>
            ) : null}
            {reward.dreamsand ? (
                <span className="reward-chip reward-chip--sand">
                    <DreamsandIcon className="reward-chip__icon" />+{reward.dreamsand}
                </span>
            ) : null}
        </span>
    );
}

export function FragmentsScreen() {
    const { state } = useGame();
    const [reading, setReading] = useState<FragmentDef | null>(null);

    if (reading) {
        return <FragmentReader fragment={reading} onExit={() => setReading(null)} />;
    }

    const fragments = allFragments();

    return (
        <>
            <div className="rv-atmosphere" aria-hidden="true" />
            <section className="rv-plate fragments" data-testid="screen-fragments">
                <PlateFrame />

                <header className="fragments__header">
                    <h1 className="rv-title fragments__title">Dream Fragments</h1>
                    <p className="fragments__flavour">
                        Step into the dream and find out what happens next.
                    </p>
                    <Divider />
                </header>

                <ul className="fragments__list">
                    {fragments.map((f) => {
                        const done = isFragmentCompleted(state, f.id);
                        return (
                            <li key={f.id} className={`frag-card frag-card--${f.type}`}>
                                {/* Illustration slot — staged for hand-drawn art (DESIGN.md). */}
                                <div className="frag-card__art" aria-hidden="true">
                                    <Fleuron className="frag-card__art-motif" />
                                </div>

                                <div className="frag-card__body">
                                    <div className="frag-card__head">
                                        <span className={`rv-seal frag-card__seal frag-card__seal--${f.type}`}>
                                            {TYPE_LABEL[f.type]}
                                        </span>
                                        {done && (
                                            <span className="frag-card__done" data-testid={`frag-done-${f.id}`}>
                                                ✦ Read
                                            </span>
                                        )}
                                    </div>

                                    <h2 className="frag-card__title">{f.title}</h2>
                                    {f.subtitle && <p className="frag-card__subtitle">{f.subtitle}</p>}
                                    <p className="frag-card__blurb">{f.blurb}</p>

                                    <div className="frag-card__foot">
                                        <span className="frag-card__reward">
                                            {done ? (
                                                'Reward gathered'
                                            ) : (
                                                <RewardChips reward={f.reward} />
                                            )}
                                        </span>
                                        <button
                                            className="rv-btn frag-card__play"
                                            data-testid={`frag-begin-${f.id}`}
                                            onClick={() => setReading(f)}
                                        >
                                            {done ? 'Replay' : 'Begin'}
                                        </button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}

/** A slim row of beat markers — the reader's progress, gilt and quiet. */
function BeatProgress({ step, total }: { step: number; total: number }) {
    return (
        <span className="reader__progress" role="img" aria-label={`Beat ${step + 1} of ${total}`}>
            {Array.from({ length: total }).map((_, i) => (
                <span key={i} className={`reader__dot${i <= step ? ' is-on' : ''}`} />
            ))}
        </span>
    );
}

/** The "tap to continue" cue — an ornamental flourish, softly pulsing. */
function ContinueCue() {
    return (
        <span className="reader__advance" aria-hidden="true">
            <Fleuron className="reader__advance-mark" />
            continue
        </span>
    );
}

/**
 * The visual-novel player: walks a fragment's beats one tap at a time, presents
 * flavour choices, and shows a completion card with the one-time reward at the
 * end (granted via the core on first read; replays grant nothing).
 */
function FragmentReader({
    fragment,
    onExit,
}: {
    fragment: FragmentDef;
    onExit: () => void;
}) {
    const { finishFragment } = useGame();
    const beats = fragment.beats;

    // step indexes into beats; step === beats.length means the episode is over.
    const [step, setStep] = useState(0);
    // For a choice beat: which option the player picked (null = not yet chosen).
    const [picked, setPicked] = useState<number | null>(null);
    // The reward granted on first completion (null once we've finished a replay).
    const [reward, setReward] = useState<FragmentReward | null>(null);
    const [finished, setFinished] = useState(false);

    const current = step < beats.length ? beats[step] : null;

    function advance() {
        const next = step + 1;
        setPicked(null);
        setStep(next);
        if (next === beats.length) {
            // Reaching the end grants the reward exactly once (idempotent in core).
            setReward(finishFragment(fragment.id));
            setFinished(true);
        }
    }

    // --- Completion card ---
    if (finished) {
        return (
            <>
                <div className="rv-atmosphere" aria-hidden="true" />
                <section className="rv-plate reader reader--end" data-testid="reader">
                    <PlateFrame />
                    <div className="reader__end">
                        <p className="reader__end-eyebrow">The dream settles</p>
                        <h2 className="rv-title reader__end-title">{fragment.title}</h2>
                        <p className="reader__end-sub">You return to the vigil.</p>
                        <Divider />
                        {reward ? (
                            <div className="reader__reward" data-testid="reader-reward">
                                <span className="reader__reward-label">You gathered</span>
                                <RewardChips reward={reward} className="reader__reward-chips" />
                            </div>
                        ) : (
                            <p className="reader__reward-none" data-testid="reader-reward-none">
                                You’ve walked this dream before — no new reward this time.
                            </p>
                        )}
                        <button className="rv-btn reader__exit" data-testid="reader-exit" onClick={onExit}>
                            Close
                        </button>
                    </div>
                </section>
            </>
        );
    }

    if (!current) return null; // unreachable; satisfies the type narrowing

    return (
        <>
            <div className="rv-atmosphere" aria-hidden="true" />
            <section className={`rv-plate reader reader--${fragment.type}`}>
                <PlateFrame />

                <div className="reader__bar">
                    <span className="reader__where">{fragment.subtitle ?? fragment.title}</span>
                    <BeatProgress step={step} total={beats.length} />
                </div>

                {/* Illustration slot — staged for the painterly scene art (DESIGN.md). */}
                <div className="reader__scene" aria-hidden="true">
                    <Fleuron className="reader__scene-motif" />
                </div>

                {current.kind === 'line' && (
                    // The whole stage advances on tap — classic VN feel.
                    <div className="reader__stage" data-testid="reader-line" onClick={advance}>
                        <div
                            className={`reader__panel${current.speaker ? '' : ' reader__panel--narration'}`}
                            key={step}
                        >
                            {current.speaker && (
                                <span className="reader__speaker">{current.speaker}</span>
                            )}
                            <p className="reader__text">{current.text}</p>
                        </div>
                        <ContinueCue />
                    </div>
                )}

                {current.kind === 'choice' && picked === null && (
                    <div className="reader__stage reader__stage--choice">
                        <div className="reader__panel reader__panel--prompt" key={`p${step}`}>
                            <p className="reader__text">{current.prompt}</p>
                        </div>
                        <div className="reader__choices">
                            {current.options.map((opt, i) => (
                                <button
                                    key={i}
                                    data-testid={`reader-choice-${i}`}
                                    className="reader__choice"
                                    onClick={() => setPicked(i)}
                                >
                                    <Fleuron className="reader__choice-mark" />
                                    <span>{opt.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {current.kind === 'choice' && picked !== null && (
                    <div className="reader__stage" data-testid="reader-response" onClick={advance}>
                        <div className="reader__panel" key={`r${step}`}>
                            <p className="reader__text">{current.options[picked].response}</p>
                        </div>
                        <ContinueCue />
                    </div>
                )}

                <button className="rv-btn--ghost reader__leave" onClick={onExit}>
                    Leave the dream
                </button>
            </section>
        </>
    );
}
