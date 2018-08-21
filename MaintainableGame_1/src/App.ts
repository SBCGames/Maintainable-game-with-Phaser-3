namespace App {

    // game
    export let game: Phaser.Game = null;
}

// -------------------------------------------------------------------------
function launch(): void {

    let game = new MaintainableGame.Game();
    App.game = game;
}

// -------------------------------------------------------------------------
window.onload = launch;
