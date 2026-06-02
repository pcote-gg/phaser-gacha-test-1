import { useRef, useState } from 'react';
import { IRefPhaserGame, PhaserGame } from './PhaserGame';
import { GameProvider } from './ui/GameContext';
import { GachaScreen } from './ui/GachaScreen';
import { BrewScreen } from './ui/BrewScreen';
import { VigilScreen } from './ui/VigilScreen';
import './ui/nav.css';

type Screen = 'vigil' | 'brew' | 'gacha';

const SCREENS: { id: Screen; label: string }[] = [
    { id: 'vigil', label: 'The Vigil' },
    { id: 'brew', label: 'The Brew' },
    { id: 'gacha', label: 'Banner' },
];

function App()
{
    //  Reference to the Phaser game + active scene, exposed so React UI can talk
    //  to the canvas (and vice-versa) via this ref or the EventBus.
    const phaserRef = useRef<IRefPhaserGame | null>(null);
    //  The daily loop opens on the Vigil — collect what accrued while away.
    const [screen, setScreen] = useState<Screen>('vigil');

    return (
        <GameProvider>
            <div id="app">
                <PhaserGame ref={phaserRef} />
                {/* React UI layer sits over the Phaser canvas. */}
                <div className="ui-overlay">
                    {screen === 'vigil' && <VigilScreen />}
                    {screen === 'brew' && <BrewScreen />}
                    {screen === 'gacha' && <GachaScreen />}
                    <nav className="screen-nav">
                        {SCREENS.map(({ id, label }) => (
                            <button
                                key={id}
                                className={screen === id ? 'is-active' : ''}
                                onClick={() => setScreen(id)}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </GameProvider>
    );
}

export default App;
