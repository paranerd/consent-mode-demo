window.addEventListener('load', () => {
    updateConsentStatus();

    setListeners();
});

function updateConsentStatus() {
    const adConsentCheckbox = document.getElementById('ad-consent');
    adConsentCheckbox.checked = consentManager.hasAdConsent();

    const analyticsConsentCheckbox = document.getElementById('analytics-consent');
    analyticsConsentCheckbox.checked = consentManager.hasAnalyticsConsent();
}

function setListeners() {
    document.getElementById('ad-consent').addEventListener('change', (event) => {
        consentManager.setAdConsent(event.target.checked);
    });

    document.getElementById('analytics-consent').addEventListener('change', (event) => {
        consentManager.setAnalyticsConsent(event.target.checked);
    });
}
