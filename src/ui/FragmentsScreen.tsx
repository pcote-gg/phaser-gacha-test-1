import { useState } from 'react';
import { useGame } from './GameContext';
import {
    allFragments,
    type FragmentDef,
    type FragmentReward,
} from '../core/content/fragments';
import { isFragmentCompleted } from '../core/fragments/progress';
import './fragments.css';

const TYPE_LABEL: Record<FragmentDef['type'], string> = {
    world: 'World',
    character: 'Character',
    event: 'Event',
};

/** Renders a reward as a short "+2 Tolls · +100 ✨" string. */
function rewardSummary(reward: FragmentReward): string {
    const parts: string[] = [];
    if (reward.tolls) parts.push(`+${reward.tolls} 🔔`);
    if (reward.dreamsand) parts.push(`+${reward.dreamsand} ✨`);
    return parts.join(' · ');
}

export function FragmentsScreen() {
    const { state } = useGame();
    const [reading, setReading] = useState<FragmentDef | null>(null);

    if (reading) {
        return <FragmentReader fragment={reading} onExit={() => setReading(null)} />;
    }

    const fragments = allFragments();

    return (
        <div className="fragments" data-testid="screen-fragments">
            <h1 className="fragments__title">Dream Fragments</h1>
            <p className="fragments__flavour">
                Step into the dream and find out what happens next.
            </p>

            <ul className="fragments__list">
                {fragments.map((f) => {
                    const done = isFragmentCompleted(state, f.id);
                    return (
                        <li key={f.id} className="frag-card">
                            <div className="frag-card__head">
                                <span className={`frag-card__type frag-card__type--${f.type}`}>
                                    {TYPE_LABEL[f.type]}
                                </span>
                                {done && <span className="frag-card__done" data-testid={`frag-done-${f.id}`}>✓ Read</span>}
                            </div>
                            <h2 className="frag-card__title">{f.title}</h2>
                            {f.subtitle && <p className="frag-card__subtitle">{f.subtitle}</p>}
                            <p className="frag-card__blurb">{f.blurb}</p>
                            <div className="frag-card__foot">
                                <span className="frag-card__reward">
                                    {done ? 'Reward claimed' : rewardSummary(f.reward)}
                                </span>
                                <button
                                    className="frag-card__play"
                                    data-testid={`frag-begin-${f.id}`}
                                    onClick={() => setReading(f)}
                                >
                                    {done ? 'Replay' : 'Begin'}
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
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
            <div className="reader" data-testid="reader">
                <div className="reader__end">
                    <h2 className="reader__end-title">{fragment.title}</h2>
                    <p className="reader__end-sub">The dream settles. You return to the vigil.</p>
                    {reward ? (
                        <div className="reader__reward" data-testid="reader-reward">
                            <span className="reader__reward-label">You gathered</span>
                            <span className="reader__reward-value">{rewardSummary(reward)}</span>
                        </div>
                    ) : (
                        <p className="reader__reward-none" data-testid="reader-reward-none">
                            You’ve walked this dream before — no new reward this time.
                        </p>
                    )}
                    <button className="reader__exit" data-testid="reader-exit" onClick={onExit}>
                        Close
                    </button>
                </div>
            </div>
        );
    }

    if (!current) return null; // unreachable; satisfies the type narrowing

    const progress = `${step + 1} / ${beats.length}`;

    return (
        <div className="reader">
            <div className="reader__bar">
                <span className="reader__where">{fragment.subtitle ?? fragment.title}</span>
                <span className="reader__progress">{progress}</span>
            </div>

            {current.kind === 'line' && (
                // The whole stage advances on tap — classic VN feel.
                <div className="reader__stage" data-testid="reader-line" onClick={advance}>
                    <div className="reader__panel">
                        {current.speaker && (
                            <span className="reader__speaker">{current.speaker}</span>
                        )}
                        <p className="reader__text">{current.text}</p>
                    </div>
                    <span className="reader__advance">tap to continue ▸</span>
                </div>
            )}

            {current.kind === 'choice' && picked === null && (
                <div className="reader__stage">
                    <div className="reader__panel reader__panel--prompt">
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
                                {opt.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {current.kind === 'choice' && picked !== null && (
                <div className="reader__stage" data-testid="reader-response" onClick={advance}>
                    <div className="reader__panel">
                        <p className="reader__text">{current.options[picked].response}</p>
                    </div>
                    <span className="reader__advance">tap to continue ▸</span>
                </div>
            )}

            <button className="reader__leave" onClick={onExit}>
                Leave the dream
            </button>
        </div>
    );
}
