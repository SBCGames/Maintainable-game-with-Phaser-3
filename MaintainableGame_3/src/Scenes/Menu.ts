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
        private saveSettings(): void {
            Utils.StorageUtils.save(App.Config.SAVE_KEY, App.settings)
                .then(function () {
                    console.log("Settings saved...");
                });
        }
    }
}
