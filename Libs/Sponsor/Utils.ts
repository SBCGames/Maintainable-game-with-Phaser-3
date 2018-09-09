namespace Sponsor {

    export let api: Sponsor;
    export let id: eSponsorID

    // --------------------------------------------------------------------
    export function is(sponsorID: eSponsorID): boolean {
        return id === sponsorID;
    }

    // --------------------------------------------------------------------
    export function features(): ISponsorFeatures {
        return api.features;
    }

    // --------------------------------------------------------------------
    export function hasFeature(featureName: string): boolean {
        return typeof api.features[featureName] !== "undefined";
    }

    // --------------------------------------------------------------------
    export function isFeatureOn(featureName: string): boolean {
        let featureValue = api.features[featureName];

        return typeof featureValue === "boolean" && featureValue;
    }
}
