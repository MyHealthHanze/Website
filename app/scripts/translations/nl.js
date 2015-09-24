angular.module('myHealthApp')
    .config(function ($translateProvider) {
        $translateProvider.translations('nl', {
            NAV_HOME: 'Home',
            NAV_LOGIN: 'Inloggen',
            NAV_LOGOUT: 'Uitloggen',
            NAV_OVERVIEW: 'Overzicht',

            BREADCRUMB_BILLS: 'Rekeningen',
            BREADCRUMB_MEASUREMENTS: 'Meetgegevens',
            BREADCRUMB_ACCOUNT_SETTINGS: 'Accountinstellingen',

            FOOTER_FOLLOW_US: 'Volg ons',
            FOOTER_GET_APP: 'Download de app',
            FOOTER_TRANSLATE: 'Vertaal MyHealth',

            HOME_TITLE: ' ontneemt al uw zorgkwesties',
            HOME_SUBTITLE: 'Met MyHealth krijgt u inzicht in al uw medische informatie, zoals persoonlijke informatie en rekeningen.',
            HOME_ICON_1_TEXT: 'Krijg inzicht',
            HOME_ICON_1_SUBTEXT: 'Houdt makkelijk al uw rekeningen bij.',
            HOME_ICON_2_TEXT: 'Zelfdiagnoses',
            HOME_ICON_2_SUBTEXT: 'Neem een foto om inzicht te krijgen in uw medische status.',
            HOME_ICON_3_TEXT: 'Android app',
            HOME_ICON_3_SUBTEXT: 'Android app is beschikbaar in de Play store.',
            HOME_SLIDER_TEXT: 'Wil je uw eigen persoonlijke dokter?',
            HOME_SLIDER_BUTTON: 'Download de Android app nu!',

            LOGIN_TITLE: 'Inloggen op',
            LOGIN_PLACEHOLDER_EMAIL: 'Emailadres',
            LOGIN_PLACEHOLDER_PASSWORD: 'Wachtwoord',
            LOGIN_BUTTON: 'Inloggen',
            LOGIN_BACK_BUTTON: 'Terug',

            BILLS_TITLE: 'Rekeningen',
            BILLS_EXAMPLE: 'De rekeningen worden hier weergegeven.',

            ACCOUNT_SETTINGS_TITLE: 'Accountinstellingen',
            ACCOUNT_SETTINGS_SUBTITLE: 'Verander uw wachtwoord en/of weergavetaal',
            ACCOUNT_SETTINGS_CHANGE_PASSWORD_TITLE: 'Verander wachtwoord',
            ACCOUNT_SETTINGS_OLD_PASSWORD_TITLE: 'Oud wachtwoord',
            ACCOUNT_SETTINGS_NEW_PASSWORD_TITLE: 'Nieuw wachtwoord',
            ACCOUNT_SETTINGS_OLD_PASSWORD_PLACEHOLDER: 'Type uw oude wachtwoord',
            ACCOUNT_SETTINGS_NEW_PASSWORD_PLACEHOLDER: 'Type uw nieuwe wachtwoord',
            ACCOUNT_SETTINGS_CHANGE_PASSWORD_BUTTON: 'Verander wachtwoord',
            ACCOUNT_SETTINGS_CHANGE_DISPLAY_LANGUAGE_TITLE: 'Verander weergavetaal'
        });
    });