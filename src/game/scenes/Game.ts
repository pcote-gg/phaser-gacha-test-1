import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

//  The Game scene is the live world / combat canvas. For now it is an empty
//  placeholder; the idle auto-battle will be built here.
export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;

        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.scene.start('MainMenu');
    }
}
