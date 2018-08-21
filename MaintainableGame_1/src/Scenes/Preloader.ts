///<reference path = "SceneBase.ts" />

namespace MaintainableGame {

    export class Preloader extends SceneBase {

        // -------------------------------------------------------------------------
        public create(): void {
            console.log("Preloader");

            this.scene.start("Menu");
        }
    }
}
