class ConsentManager {
    constructor() {
        this.STATUS_GRANTED = 'granted';
        this.STATUS_DENIED = 'denied';
        this.AD_CONSENT_KEY = 'ad_storage';
        this.ANALYTICS_CONSENT_KEY = 'analytics_storage';

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { dataLayer.push(arguments); }

        gtag('consent', 'default', {
            'ad_storage': this.STATUS_DENIED,
            'analytics_storage': this.STATUS_DENIED,
            'wait_for_update': 500, // ms
            'url_passthrough': true
        });

        window.addEventListener('load', () => {
            this.setConsentModes();
        });
    }

    setConsentModes() {
        const update = {};
        update[this.AD_CONSENT_KEY] = localStorage.getItem(this.AD_CONSENT_KEY) || this.STATUS_DENIED;
        update[this.ANALYTICS_CONSENT_KEY] = localStorage.getItem(this.ANALYTICS_CONSENT_KEY) || this.STATUS_DENIED;

        gtag('consent', 'update', update);

        console.log("Ad consent", localStorage.getItem(this.AD_CONSENT_KEY) || this.STATUS_DENIED);
        console.log("Analytics consent", localStorage.getItem(this.ANALYTICS_CONSENT_KEY) || this.STATUS_DENIED);
    }

    hasAdConsent() {
        return localStorage.getItem(this.AD_CONSENT_KEY) === this.STATUS_GRANTED;
    }

    hasAnalyticsConsent() {
        return localStorage.getItem(this.ANALYTICS_CONSENT_KEY) === this.STATUS_GRANTED;
    }

    setAdConsent(status) {
        const consentStr = status ? this.STATUS_GRANTED : this.STATUS_DENIED;
        const update = {};
        update[this.AD_CONSENT_KEY] = consentStr;

        gtag('consent', 'update', update);

        localStorage.setItem(this.AD_CONSENT_KEY, consentStr);
    }

    setAnalyticsConsent(status) {
        const consentStr = status ? this.STATUS_GRANTED : this.STATUS_DENIED;
        const update = {};
        update[this.ANALYTICS_CONSENT_KEY] = consentStr;

        gtag('consent', 'update', update);

        localStorage.setItem(this.ANALYTICS_CONSENT_KEY, consentStr);
    }
}