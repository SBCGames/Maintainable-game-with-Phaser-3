/// <reference path ="Settings.ts" />

namespace App {

    // game
    export let game: Phaser.Game = null;

    // settings
    export let settings = new Settings();
}

// -------------------------------------------------------------------------
async function launch(): Promise<void> {

    // load main game config
    let configJson: any = null;
    try {
        configJson = await Utils.ObjectUtils.loadJson("assets/config.json");
        Utils.ObjectUtils.loadValuesIntoObject(configJson, App.Config);
    } catch (e) {
        throw e;
    }


    // create game
    let game = new MaintainableGame.Game();
    App.game = game;
}

// -------------------------------------------------------------------------
window.onload = launch;
