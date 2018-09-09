namespace Sponsor {

    // set of base sponsor features
    export interface ISponsor {
        startGameSession(...parameters: any[]): void;
        endGameSession(...parameters: any[]): void;

        submitScore(...parameters: any[]): void;

        showAd(...parameters: any[]): void;
    }

    /** 
     * Sponsor class is abstract adapter implementing ISponsor interface
     */
    export abstract class Sponsor implements ISponsor {

        private static _instance: Sponsor = null;

        private _features: ISponsorFeatures = null;

        private _game: Phaser.Game = null;

        // --------------------------------------------------------------------
        public static get instance(): Sponsor {

            // check null or undefined
            if (Sponsor._instance == null) {
                throw new Error(`Sponsor is ${Sponsor._instance}. Sponsor must be always initialized.`);
            }

            return Sponsor._instance;
        }

        // --------------------------------------------------------------------
        public static get initialized(): boolean {
            return Sponsor._instance != null;
        }


        // --------------------------------------------------------------------
        protected constructor(features: ISponsorFeatures) {

            // instance
            Sponsor._instance = this;

            this._features = features;

            api = this;
            id = features.id;
        }


        // --------------------------------------------------------------------
        public get id(): eSponsorID {
            return this.features.id;
        }

        // --------------------------------------------------------------------
        public get features(): ISponsorFeatures {
            return this._features;
        }

        // --------------------------------------------------------------------
        public set game(game: Phaser.Game) {
            this._game = game;
        }


        // #region Default interface implementation

        // --------------------------------------------------------------------
        public startGameSession(...parameters: any[]): void {
            console.log(`Sponsor ${eSponsorID[this.id]}: startGameSession() with parameters ${parameters}`);
        }

        // --------------------------------------------------------------------
        public endGameSession(...parameters: any[]): void {
            console.log(`Sponsor ${eSponsorID[this.id]}: endGameSession() with parameters ${parameters}`);
        }

        // --------------------------------------------------------------------
        public submitScore(...parameters: any[]): void {
            console.log(`Sponsor ${eSponsorID[this.id]}: submitScore() with parameters ${parameters}`);
        }

        // --------------------------------------------------------------------
        public showAd(...parameters: any[]): void {
            console.log(`Sponsor ${eSponsorID[this.id]}: showAd() with parameters ${parameters}`);
        }

        // #endregion
    }
}
