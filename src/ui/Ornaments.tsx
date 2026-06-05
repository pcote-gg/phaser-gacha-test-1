/*
 * Ornaments.tsx — the reusable ornamental vocabulary for the Reverie Vigil UI
 * (north star: DESIGN.md "Ornament"). Inline SVG so it stays crisp at any size
 * and tints with the gilt palette via `currentColor`. Pure presentational
 * components, no game logic. The Dream Fragment screen is the first consumer;
 * other screens reuse these as the language is propagated.
 */

/** One Art-Nouveau corner flourish, drawn for the top-left; CSS flips it for
 *  the other three corners (see `.rv-corner--*` in theme.css). */
function CornerFlourish({ className }: { className: string }) {
    return (
        <svg className={className} viewBox="0 0 46 46" fill="none" aria-hidden="true">
            <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
                <path d="M4 4 C 4 16, 9 24, 22 26.5" />
                <path d="M22 26.5 C 30 27.5, 32.5 21, 28.5 18 C 25.5 15.8, 21.5 18, 23.5 22" />
                <path d="M4 4 C 12.5 5, 16.5 9.5, 17.5 18" />
                <path d="M11 8 C 9 6.5, 7.5 5.5, 5.5 3" opacity="0.7" />
            </g>
            <circle cx="27" cy="21.5" r="1.5" fill="currentColor" />
        </svg>
    );
}

/** The four corner flourishes for a `.rv-plate`. Drop in as a child of the plate. */
export function PlateFrame() {
    return (
        <>
            <CornerFlourish className="rv-corner rv-corner--tl" />
            <CornerFlourish className="rv-corner rv-corner--tr" />
            <CornerFlourish className="rv-corner rv-corner--bl" />
            <CornerFlourish className="rv-corner rv-corner--br" />
        </>
    );
}

/** A symmetric vegetal fleuron mark — the centre of a divider, or a bullet. */
export function Fleuron({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 2.5 C 14 8, 16 10, 21.5 12 C 16 14, 14 16, 12 21.5 C 10 16, 8 14, 2.5 12 C 8 10, 10 8, 12 2.5 Z"
                fill="currentColor"
            />
            <circle cx="12" cy="12" r="1.7" fill="var(--rv-surface)" />
        </svg>
    );
}

/** A fleuron flanked by thin gilt rules — section punctuation (replaces <hr>). */
export function Divider() {
    return (
        <div className="rv-divider" aria-hidden="true">
            <span className="rv-divider__rule" />
            <Fleuron className="rv-divider__mark" />
            <span className="rv-divider__rule" />
        </div>
    );
}

/** Tolls — a bell pulled from outside the dream (GDD §9). */
export function BellIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
            <path
                d="M10 2.6c.7 0 1.2.5 1.2 1.1 2.6.8 3.6 2.9 3.6 5.6 0 2.4.4 3.4 1.4 4.4.4.4.1 1.1-.5 1.1H4.3c-.6 0-.9-.7-.5-1.1 1-1 1.4-2 1.4-4.4 0-2.7 1-4.8 3.6-5.6 0-.6.5-1.1 1.2-1.1Z"
                fill="currentColor"
            />
            <path d="M8.2 16a1.8 1.8 0 0 0 3.6 0Z" fill="currentColor" />
        </svg>
    );
}

/** Caffeine — a coffee bean; the wakefulness that defines The Awake (GDD §7B). */
export function CaffeineIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
            <g transform="rotate(32 10 10)">
                <ellipse cx="10" cy="10" rx="5.4" ry="7.6" fill="currentColor" />
                <path
                    d="M10 3.2 C 8.2 7, 11.8 13, 10 16.8"
                    fill="none"
                    stroke="var(--rv-surface)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
}

/** Dreamsand — the dream's own glittering substance (GDD §6). */
export function DreamsandIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 1.8 11.7 8.3 18.2 10 11.7 11.7 10 18.2 8.3 11.7 1.8 10 8.3 8.3 Z" fill="currentColor" />
            <circle cx="15.6" cy="4.4" r="1" fill="currentColor" />
            <circle cx="4.6" cy="15" r="0.8" fill="currentColor" />
        </svg>
    );
}