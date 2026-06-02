import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

export class MainMenu extends Scene
{
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        //  Placeholder title until real menu art / React UI is in place.
        this.title = this.add.text(512, 384, 'Reverie Vigil', {
            fontFamily: 'Georgia, serif', fontSize: 48, color: '#f3e9d2',
            align: 'center'
        }).setOrigin(0.5);

        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.scene.start('Game');
    }
}
