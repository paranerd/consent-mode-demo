setConsentModes();

window.onload = function() {
    setConsentModes();
}

function setConsentModes() {
    gtag('consent', 'update', {
        'ad_storage': localStorage.getItem('ad_consent') || 'denied',
        'analytics_storage': localStorage.getItem('analytics_consent') || 'denied'
    });

    console.log("Ad consent", localStorage.getItem('ad_consent') || 'denied');
    console.log("Analytics consent", localStorage.getItem('analytics_consent') || 'denied');
}

function hasAdConsent() {
    return localStorage.getItem('ad_consent') === 'granted';
}

function hasAnalyticsConsent() {
    return localStorage.getItem('analytics_consent') === 'granted';
}

function setAdConsent(status) {
    const consentStr = status ? 'granted' : 'denied';

    gtag('consent', 'update', {
        'ad_storage': consentStr
    });

    localStorage.setItem('ad_consent', consentStr);
}

function setAnalyticsConsent(status) {
    const consentStr = status ? 'granted' : 'denied';

    gtag('consent', 'update', {
        'analytics_storage': consentStr
    });

    localStorage.setItem('analytics_consent', consentStr);
}
