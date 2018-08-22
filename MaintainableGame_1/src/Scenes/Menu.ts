///<reference path = "SceneBase.ts" />

namespace MaintainableGame {

    export class Menu extends SceneBase {

        // -------------------------------------------------------------------------
        public create(): void {
            console.log("Menu");

            // bacground color
            this.cameras.main.backgroundColor = Phaser.Display.Color.ValueToColor(0x808080);

            // focus on 0, 0
            this.setView();

            // red circle
            let graphics = this.add.graphics();
            graphics.fillStyle(0xff0000);
            graphics.fillCircle(0, 0, 50);
        }
    }
}
