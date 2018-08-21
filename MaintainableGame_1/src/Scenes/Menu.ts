///<reference path = "SceneBase.ts" />

namespace MaintainableGame {

    export class Menu extends SceneBase {

        // -------------------------------------------------------------------------
        public create(): void {
            console.log("Menu");

            this.cameras.main.backgroundColor = Phaser.Display.Color.ValueToColor(0x80FF80);
        }
    }
}
