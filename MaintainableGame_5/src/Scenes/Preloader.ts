///<reference path = "SceneBase.ts" />

namespace MaintainableGame {

    export class Preloader extends SceneBase {

        // --------------------------------------------------------------------
        public preload(): void {

            console.log("Loading assets...");

            // load atlas with test sprites
            this.load.atlas("Sprites", "assets/sprites/Sprites.png", "assets/sprites/Sprites.json");
        }

        // --------------------------------------------------------------------
        public create(): void {
            console.log("Preloader");

            let self = this;

            // load user settings
            Utils.StorageUtils.load(App.Config.SAVE_KEY)
                .then(function (data: any) {
                    // if data is not null and not undefined
                    if (data != null) {
                        App.settings = data;
                        console.log("Settings loaded...");
                    } else {
                        console.log("No saved settings.");
                    }

                    // continue to menu
                    self.scene.start("Menu");
                });
        }
    }
}
