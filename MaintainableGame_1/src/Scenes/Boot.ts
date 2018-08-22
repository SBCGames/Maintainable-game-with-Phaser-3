///<reference path = "SceneBase.ts" />

namespace MaintainableGame {

    export class Boot extends SceneBase {

        // --------------------------------------------------------------------
        public create(): void {
            console.log("Boot");

            this.scene.start("Preloader");
        }
    }
}
