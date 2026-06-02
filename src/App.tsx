import { useRef } from 'react';
import { IRefPhaserGame, PhaserGame } from './PhaserGame';

function App()
{
    //  Reference to the Phaser game + active scene, exposed so React UI can talk
    //  to the canvas (and vice-versa) via this ref or the EventBus.
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    return (
        <div id="app">
            <PhaserGame ref={phaserRef} />
            {/* React UI layer (menus, gacha, roster, Dream Fragments) will mount here. */}
        </div>
    );
}

export default App;
