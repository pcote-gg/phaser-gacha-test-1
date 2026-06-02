/**
 * Dream Fragments — the authored, visual-novel story episodes that are the
 * game's primary active-engagement hook (GDD §7A). Pure content + schema: no
 * engine or rendering imports. The runtime (which fragment is completed, reward
 * granting) lives in `../fragments/progress.ts`; how a fragment is *displayed*
 * lives in the React reader. This file is just the data and its shape, so new
 * episodes can be authored without touching engineering code.
 */

/** The three kinds of Dream Fragment (GDD §7A "Content types"). */
export type FragmentType = 'world' | 'character' | 'event';

/**
 * The small resource drop awarded once on first completion (GDD §7A: "a small
 * but meaningful resource drop"). Tolls are the headline reward — Dream Fragment
 * completions are a listed Toll source (GDD §9). Fields are optional so an
 * episode can grant any subset.
 */
export interface FragmentReward {
    /** Gacha pull currency (GDD §9). */
    tolls?: number;
    /** Spendable Dreamsand, banked straight into the balance (GDD §6). */
    dreamsand?: number;
}

/** One spoken/narrated line. `speaker` omitted ⇒ narration / scene text. */
export interface LineBeat {
    kind: 'line';
    speaker?: string;
    text: string;
}

/**
 * A flavour choice. The player picks one option and sees its `response`, but the
 * story does not branch — choices "affect tone/flavour (not branching outcomes
 * at MVP)" (GDD §7A). Which option was picked is not persisted: nothing consumes
 * it yet, so storing it would be speculative state.
 */
export interface ChoiceBeat {
    kind: 'choice';
    prompt: string;
    options: { text: string; response: string }[];
}

/** A fragment plays as a linear sequence of these beats. */
export type FragmentBeat = LineBeat | ChoiceBeat;

/** A complete, authored Dream Fragment episode. */
export interface FragmentDef {
    /** Stable unique id, referenced by save data — never change once shipped. */
    id: string;
    type: FragmentType;
    /** Episode title shown in the list and on the title card. */
    title: string;
    /** Secondary line — e.g. the character or region the episode concerns. */
    subtitle?: string;
    /** One-line hook for the fragment list. */
    blurb: string;
    /** The script, played in order. */
    beats: FragmentBeat[];
    /** Granted once, on first completion. */
    reward: FragmentReward;
}

/**
 * Authored fragments for the MVP slice. One episode for now — a Character
 * emergence scene (GDD §7A flags these as the always-voiced, replayable hero
 * moments). Adding more is pure data: append to this array.
 *
 * Regional/relationship gating (GDD §7A) is not modelled yet — those systems
 * don't exist at this phase — so every authored fragment is simply available.
 */
export const FRAGMENTS: FragmentDef[] = [
    {
        id: 'emergence-chamomile',
        type: 'character',
        title: 'The First Warmth',
        subtitle: 'Emergence — Chamomile',
        blurb: 'Something gentle stirs at the edge of the dream, and asks to be woken.',
        reward: { tolls: 2, dreamsand: 100 },
        beats: [
            {
                kind: 'line',
                text: 'The Reverie is loud tonight — a green, overgrown loudness, leaves pressing against leaves, everything dreaming of growing larger.',
            },
            {
                kind: 'line',
                text: 'And then, beneath all of it, something small. A warmth, curled up and half-asleep, that has been waiting a very long time to be noticed.',
            },
            {
                kind: 'line',
                speaker: 'A small voice',
                text: '…oh. You can see me? Most things look right past. I don’t take up much room.',
            },
            {
                kind: 'line',
                speaker: 'A small voice',
                text: 'I’m not the kind that wakes the world with a shout. I’m the kind you’re glad is still there at the end of a long day. Chamomile, if you’d like a name to hold.',
            },
            {
                kind: 'choice',
                prompt: 'She is waiting at the threshold of waking. How do you reach for her?',
                options: [
                    {
                        text: 'Wake her gently — there is no hurry.',
                        response:
                            'You let the warmth come up slowly, the way light reaches a windowsill. She breathes out, steadies, and opens her eyes without flinching. “Yes,” she says. “Like that. Thank you.”',
                    },
                    {
                        text: 'Tell her the world needs her now.',
                        response:
                            'She blinks, surprised to be needed at all. “Me? …All right. If you say so.” The doubt doesn’t leave her face — but neither does she look away. Sometimes being asked is enough.',
                    },
                ],
            },
            {
                kind: 'line',
                text: 'The warmth unfolds. Pale gold, soft-edged, smelling faintly of a kitchen at dusk. Where she stands, the frantic green of the dream loosens, just slightly, and remembers how to rest.',
            },
            {
                kind: 'line',
                speaker: 'Chamomile',
                text: 'I can’t shake the world awake. But I can sit with the ones who do, and make sure they last. That’s a kind of vigil too, isn’t it?',
            },
            {
                kind: 'line',
                text: 'She is Awake now — fully, vividly herself, too specific for the dream to swallow back down. The first of yours to answer the bell.',
            },
            {
                kind: 'line',
                speaker: 'Chamomile',
                text: 'So. Where do we begin, Waker?',
            },
        ],
    },
];

/** Lookup index, built once from the authored fragments. */
const BY_ID = new Map<string, FragmentDef>(FRAGMENTS.map((f) => [f.id, f]));

/** Returns the fragment definition for an id, or `undefined` if unknown. */
export function getFragment(id: string): FragmentDef | undefined {
    return BY_ID.get(id);
}

/** All authored fragments (the full library of content). */
export function allFragments(): readonly FragmentDef[] {
    return FRAGMENTS;
}
