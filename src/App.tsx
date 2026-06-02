import { useRef, useState } from 'react';
import { IRefPhaserGame, PhaserGame } from './PhaserGame';
import { GameProvider } from './ui/GameContext';
import { GachaScreen } from './ui/GachaScreen';
import { BrewScreen } from './ui/BrewScreen';
import './ui/nav.css';

type Screen = 'brew' | 'gacha';

function App()
{
    //  Reference to the Phaser game + active scene, exposed so React UI can talk
    //  to the canvas (and vice-versa) via this ref or the EventBus.
    const phaserRef = useRef<IRefPhaserGame | null>(null);
    const [screen, setScreen] = useState<Screen>('brew');

    return (
        <GameProvider>
            <div id="app">
                <PhaserGame ref={phaserRef} />
                {/* React UI layer sits over the Phaser canvas. */}
                <div className="ui-overlay">
                    {screen === 'brew' ? <BrewScreen /> : <GachaScreen />}
                    <nav className="screen-nav">
                        <button
                            className={screen === 'brew' ? 'is-active' : ''}
                            onClick={() => setScreen('brew')}
                        >
                            The Brew
                        </button>
                        <button
                            className={screen === 'gacha' ? 'is-active' : ''}
                            onClick={() => setScreen('gacha')}
                        >
                            Banner
                        </button>
                    </nav>
                </div>
            </div>
        </GameProvider>
    );
}

export default App;
