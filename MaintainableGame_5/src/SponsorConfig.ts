namespace App {

    // extend sponsor features with game specific properties
    export type SponsorFeatures = Sponsor.ISponsorFeatures &
    {
        defaultLanguage: string;
        showFlags: boolean;
    };


    // define features for each single sponsor
    export const SPONSOR_FEATURES: { [key: number]: SponsorFeatures } = {

        [Sponsor.eSponsorID.NONE]: {
            id: Sponsor.eSponsorID.NONE,
            name: "none",
            hasConfig: false,

            defaultLanguage: "cs",
            showFlags: false
        },

        [Sponsor.eSponsorID.SBC_GAMES]: {
            id: Sponsor.eSponsorID.SBC_GAMES,
            name: "sbc_games",
            hasConfig: true,

            defaultLanguage: "en",
            showFlags: true
        }
    };


    // --------------------------------------------------------------------
    export function getSponsorFeatures(id: Sponsor.eSponsorID): SponsorFeatures {

        // are features for sponsor in list?
        if (SPONSOR_FEATURES[id] == null) {
            throw new Error(`Features for sponsor ${Sponsor.eSponsorID[id]} are not in SPONSOR_FEATURES list.`);
        }

        return SPONSOR_FEATURES[id];
    }
}
