import { useRef } from 'react';
import { IRefPhaserGame, PhaserGame } from './PhaserGame';
import { GameProvider } from './ui/GameContext';
import { GachaScreen } from './ui/GachaScreen';

function App()
{
    //  Reference to the Phaser game + active scene, exposed so React UI can talk
    //  to the canvas (and vice-versa) via this ref or the EventBus.
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    return (
        <GameProvider>
            <div id="app">
                <PhaserGame ref={phaserRef} />
                {/* React UI layer sits over the Phaser canvas. */}
                <div className="ui-overlay">
                    <GachaScreen />
                </div>
            </div>
        </GameProvider>
    );
}

export default App;
