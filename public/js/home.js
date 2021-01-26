window.onload = function() {
    updateConsentStatus();

    setListeners();
}

function updateConsentStatus() {
    const adConsentCheckbox = document.getElementById('ad-consent');
    adConsentCheckbox.checked = hasAdConsent();

    const analyticsConsentCheckbox = document.getElementById('analytics-consent');
    analyticsConsentCheckbox.checked = hasAnalyticsConsent();
}

function setListeners() {
    document.getElementById('ad-consent').addEventListener('change', (event) => {
        setAdConsent(event.target.checked);
    });

    document.getElementById('analytics-consent').addEventListener('change', (event) => {
        setAnalyticsConsent(event.target.checked);
    });

    document.getElementById('subscribe').addEventListener('submit', event => {
        dataLayer.push({'event': 'form-signup'});
    });
}
