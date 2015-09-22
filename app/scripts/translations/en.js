angular.module('myHealthApp')
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            NAV_HOME: 'Home',
            NAV_LOGIN: 'Login',
            NAV_LOGOUT: 'Logout',

            BREADCRUMB_BILLS: 'Bills',
            BREADCRUMB_MEASUREMENTS: 'Measurements',

            FOOTER_FOLLOW_US: 'Follow us',
            FOOTER_GET_APP: 'Get the app',
            FOOTER_TRANSLATE: 'Translate MyHealth',
            FOOTER_DUTCH_LANGUAGE: 'Dutch',
            FOOTER_ENGLISH_LANGUAGE: 'English',

            HOME_TITLE: ' takes care of all your medical worries',
            HOME_SUBTITLE: 'With MyHealth you get insights into your medical information, like personal records and bills.',
            HOME_ICON_1_TEXT: 'Get insight',
            HOME_ICON_1_SUBTEXT: 'Keep a record of your medical bills, easy.',
            HOME_ICON_2_TEXT: 'Self diagnostics',
            HOME_ICON_2_SUBTEXT: 'Take a picture to get to know more about your medical state.',
            HOME_ICON_3_TEXT: 'Android app',
            HOME_ICON_3_SUBTEXT: 'An Android app is available on the Play store.',
            HOME_SLIDER_TEXT: 'Do you want your own mobile doctor?',
            HOME_SLIDER_BUTTON: 'Download the Android app now!',

            LOGIN_TITLE: 'Login to',
            LOGIN_PLACEHOLDER_EMAIL: 'Email address',
            LOGIN_PLACEHOLDER_PASSWORD: 'Password',
            LOGIN_BUTTON: 'Login',
            LOGIN_BACK_BUTTON: 'Back',

            BILLS_TITLE: 'Bills',
            BILLS_EXAMPLE: 'The bills will be displayed here.'
        });
    });