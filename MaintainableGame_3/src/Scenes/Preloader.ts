///<reference path = "SceneBase.ts" />

namespace MaintainableGame {

    export class Preloader extends SceneBase {

        // -------------------------------------------------------------------------
        public preload(): void {

            console.log("Loading assets...");

            // load atlas with test sprites
            this.load.atlas("Sprites", "assets/sprites/Sprites.png", "assets/sprites/Sprites.json");
        }

        // -------------------------------------------------------------------------
        public create(): void {
            console.log("Preloader");

            this.scene.start("Menu");
        }
    }
}
