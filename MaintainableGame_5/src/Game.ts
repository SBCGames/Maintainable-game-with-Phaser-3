namespace MaintainableGame {

    export class Game extends Phaser.Game {

        // --------------------------------------------------------------------
        constructor() {

            // default renderer
            let renderer: number = Phaser.AUTO;

            // init game
            super(
                {
                    type: renderer,

                    parent: "game_content",

                    width: App.Config.GAME_WIDTH,
                    height: App.Config.GAME_HEIGHT,

                    title: "Maintainable Game",
                }
            );

            // states
            this.scene.add("Boot", Boot);
            this.scene.add("Preloader", Preloader);
            this.scene.add("Menu", Menu);
            this.scene.add("Play", Play);

            // start
            this.scene.start("Boot");
        }
    }
}
