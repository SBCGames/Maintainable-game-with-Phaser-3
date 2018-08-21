namespace MaintainableGame {

    export class Game extends Phaser.Game {

        // -------------------------------------------------------------------------
        constructor() {

            // default renderer
            let renderer: number = Phaser.AUTO;

            // init game
            super(
                {
                    type: renderer,

                    parent: "game_content",

                    width: 800,
                    height: 600,

                    title: "Maintainable Game",
                }
            );

            // states
            this.scene.add("Boot", Boot);
            this.scene.add("Preloader", Preloader);
            this.scene.add("Menu", Menu);

            // start
            this.scene.start("Boot");
        }
    }
}
