import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene loads the minimal assets needed by the Preloader itself
        //  (e.g. a logo or loading-screen background). Nothing to load yet.
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
