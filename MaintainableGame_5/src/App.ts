/// <reference path ="Settings.ts" />
/// <reference path="SponsorConfig.ts" />

namespace App {

    // sponsor
    export const sponsor: Sponsor.eSponsorID = Sponsor.eSponsorID.SBC_GAMES;

    // game
    export let game: Phaser.Game = null;

    // settings
    export let settings = new Settings();
}

// -------------------------------------------------------------------------
async function launch(): Promise<void> {

    let sponsorFeatures = App.getSponsorFeatures(App.sponsor);

    if (App.sponsor === Sponsor.eSponsorID.NONE) {
        new Sponsor.SponsorNone(sponsorFeatures);
    } else if (App.sponsor === Sponsor.eSponsorID.SBC_GAMES) {
        new Sponsor.SponsorSBCGames(sponsorFeatures);
    }


    // load main game config
    try {
        let configJson = await Utils.ObjectUtils.loadJson("assets/config.json");
        Utils.ObjectUtils.loadValuesIntoObject(configJson, App.Config);
    } catch (e) {
        throw e;
    }

    // load sponsor config if exist
    if (Sponsor.isFeatureOn("hasConfig")) {
        try {
            let sponsorConfigJson = await Utils.ObjectUtils.loadJson(`assets/sponsor/${Sponsor.features().name}.json`);
            Utils.ObjectUtils.loadValuesIntoObject(sponsorConfigJson, App.Config);
        } catch (e) {
            throw e;
        }
    }


    // create game
    let game = new MaintainableGame.Game();
    App.game = game;
    // save game reference also into sponsor implementation
    Sponsor.api.game = game;
}

// -------------------------------------------------------------------------
window.onload = launch;
