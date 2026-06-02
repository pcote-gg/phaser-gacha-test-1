import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  A simple loading progress bar. Outline of the bar:
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  The progress bar itself, growing from the left as assets load:
        const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

        this.load.on('progress', (progress: number) => {
            //  The bar is 460px wide at 100%.
            bar.width = 4 + (460 * progress);
        });
    }

    preload ()
    {
        //  Game assets are loaded here. Replace with real assets as they are produced.
        this.load.setPath('assets');
    }

    create ()
    {
        //  Once assets are loaded, move on to the main menu. Global animations or
        //  shared objects can be created here first if needed.
        this.scene.start('MainMenu');
    }
}
