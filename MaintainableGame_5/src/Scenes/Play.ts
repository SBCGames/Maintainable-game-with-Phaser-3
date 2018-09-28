///<reference path = "SceneBase.ts" />

namespace MaintainableGame {

    export class Play extends SceneBase {

        // --------------------------------------------------------------------
        public create(): void {
            console.log("Play");

            // bacground color
            this.cameras.main.backgroundColor = Phaser.Display.Color.ValueToColor(0xB8C6FF);

            // focus on 0, 0
            this.setView();

            // back icon
            this.addControlls();

            // add some animation
            this.buildScene();
        }

        // --------------------------------------------------------------------
        private addControlls(): void {
            let y = -this.gameHeight / 2 + 50;
            let x = -this.gameWidth / 2 + 50

            // menu icon
            let menu = this.add.sprite(x, y, "Sprites", "IconMenu");
            menu.setInteractive();
            menu.on("pointerdown", function (this: Play) {
                this.backToMenu();
            }, this);
        }

        // --------------------------------------------------------------------
        private buildScene(): void {

            // create pig animation if it does not exist
            if (typeof this.anims.get("pig") === "undefined") {
                this.anims.create({
                    key: "pig",
                    frames: this.anims.generateFrameNames("Sprites", { frames: ["pig01", "pig02", "pig03", "pig04", "pig05", "pig06", "pig07"] }),
                    frameRate: 3,
                    repeat: -1
                });
            }

            // add pig sprite and play animation
            let pig = this.add.sprite(0, 0, "Sprites");
            pig.anims.play("pig");
        }

        // --------------------------------------------------------------------
        private backToMenu(): void {

            let self = this;

            // report end of game
            Sponsor.api.endGameSession({ score: 12345, level: 10 })
                .then(function () {
                    self.scene.start("Menu");
                });

            // some very special SBCGames function
            if (Sponsor.is(Sponsor.eSponsorID.SBC_GAMES)) {
                (<Sponsor.SponsorSBCGames>Sponsor.api).someVerySpecificSponsorFunction();
            }
        }
    }
}
