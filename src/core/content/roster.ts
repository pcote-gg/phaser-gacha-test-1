import type { CharacterDef } from './characters';

/**
 * Seed roster for the MVP slice — placeholder Common and Rare characters drawn
 * from the GDD's drink-of-origin theme (§4). Stats and caffeine values are
 * first-pass placeholders to be balanced later; ids are final.
 *
 * Caffeine roughly tracks the real drink: herbal/tisane ~ very low, brewed
 * coffees ~ high. Lower-caffeine characters lean tankier/supportive, higher
 * lean toward attack — giving The Brew's gauge a real team-building trade-off.
 */
export const CHARACTERS: CharacterDef[] = [
    // --- Common: everyday teas and basic brews ---
    {
        id: 'chamomile',
        name: 'Chamomile',
        drink: 'Chamomile tea',
        rarity: 'common',
        caffeine: 4,
        baseStats: { hp: 130, atk: 8 },
        tagline: 'Gentle, patient, quietly resilient.',
    },
    {
        id: 'peppermint',
        name: 'Peppermint',
        drink: 'Peppermint tea',
        rarity: 'common',
        caffeine: 6,
        baseStats: { hp: 115, atk: 10 },
        tagline: 'Cool-headed and clarifying.',
    },
    {
        id: 'rooibos',
        name: 'Rooibos',
        drink: 'Rooibos tisane',
        rarity: 'common',
        caffeine: 3,
        baseStats: { hp: 140, atk: 7 },
        tagline: 'Warm, earthy, unshakeable.',
    },
    {
        id: 'drip',
        name: 'Drip',
        drink: 'Standard drip coffee',
        rarity: 'common',
        caffeine: 34,
        baseStats: { hp: 95, atk: 14 },
        tagline: 'Dependable. The backbone of any team.',
    },
    // --- Rare: specialty drinks ---
    {
        id: 'earl-grey',
        name: 'Earl Grey',
        drink: 'Earl Grey tea',
        rarity: 'rare',
        caffeine: 42,
        baseStats: { hp: 100, atk: 16 },
        tagline: 'Bergamot-bright and a touch aristocratic.',
    },
    {
        id: 'chai',
        name: 'Chai',
        drink: 'Masala chai',
        rarity: 'rare',
        caffeine: 46,
        baseStats: { hp: 105, atk: 17 },
        tagline: 'Spiced, layered, full of warmth.',
    },
    {
        id: 'matcha',
        name: 'Matcha',
        drink: 'Matcha',
        rarity: 'rare',
        caffeine: 56,
        baseStats: { hp: 85, atk: 21 },
        tagline: 'Calm focus with a long, steady burn.',
    },
    {
        id: 'cortado',
        name: 'Cortado',
        drink: 'Cortado',
        rarity: 'rare',
        caffeine: 68,
        baseStats: { hp: 80, atk: 24 },
        tagline: 'Small, intense, perfectly balanced — until it isn’t.',
    },
];
