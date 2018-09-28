///<reference path = "SceneBase.ts" />

namespace MaintainableGame {

    export class Menu extends SceneBase {

        // --------------------------------------------------------------------
        public create(): void {
            console.log("Menu");

            // bacground color
            this.cameras.main.backgroundColor = Phaser.Display.Color.ValueToColor(0x808080);

            // focus on 0, 0
            this.setView();

            // sound and music icons
            this.addAudioControlls();

            // add play button
            this.addPlayButton();

            // text
            if (App.Config.SPONSOR_ASSOCIATION.length > 0) {
                this.add.text(-this.gameWidth / 2 + 20, this.gameHeight / 2 - 30, App.Config.SPONSOR_ASSOCIATION);
            }
        }

        // --------------------------------------------------------------------
        private addAudioControlls(): void {
            let y = -this.gameHeight / 2 + 50;

            // sound
            let soundIconFrame = App.settings.soundOn ? "IconSoundOn" : "IconSoundOff";
            let sound = this.add.sprite(-40, y, "Sprites", soundIconFrame);
            sound.setInteractive();
            sound.on("pointerdown", function (this: Menu) {
                App.settings.soundOn = !App.settings.soundOn;
                sound.setFrame(App.settings.soundOn ? "IconSoundOn" : "IconSoundOff");
                this.saveSettings();
            }, this);

            // music
            let musicIconFrame = App.settings.musicOn ? "IconMusicOn" : "IconMusicOff";
            let music = this.add.sprite(40, y, "Sprites", musicIconFrame);
            music.setInteractive();
            music.on("pointerdown", function (this: Menu) {
                App.settings.musicOn = !App.settings.musicOn;
                music.setFrame(App.settings.musicOn ? "IconMusicOn" : "IconMusicOff");
                this.saveSettings();
            }, this);
        }

        // --------------------------------------------------------------------
        private addPlayButton(): void {
            // play
            let play = this.add.sprite(0, 0, "Sprites", "IconPlay");
            play.setInteractive();
            play.on("pointerdown", function (this: Menu) {
                this.startGame();
            }, this);
        }

        // --------------------------------------------------------------------
        private saveSettings(): void {
            Utils.StorageUtils.save(App.Config.SAVE_KEY, App.settings)
                .then(function () {
                    console.log("Settings saved...");   
                }).catch(function (e) {
                    console.log(e);
                });
        }

        // --------------------------------------------------------------------
        private startGame(): void {

            let self = this;

            // report start of game
            Sponsor.api.startGameSession()
                .then(function () {
                    self.scene.start("Play");
                });
        }
    }
}
