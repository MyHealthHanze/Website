angular.module('myHealthApp')
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            NAV_HOME: 'Home',
            NAV_LOGIN: 'Login',
            NAV_LOGOUT: 'Logout',
            NAV_OVERVIEW: 'Overview',

            BREADCRUMB_BILLS: 'Bills',
            BREADCRUMB_ACCOUNT_SETTINGS: 'Account settings',

            FOOTER_FOLLOW_US: 'Follow us',
            FOOTER_GET_APP: 'Get the app',
            FOOTER_TRANSLATE: 'Translate MyHealth',

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
            BILLS_EXAMPLE: 'The bills will be displayed here.',

            ACCOUNT_SETTINGS_TITLE: 'Account settings',
            ACCOUNT_SETTINGS_SUBTITLE: 'Change your password and/or display language',
            ACCOUNT_SETTINGS_CHANGE_PASSWORD_TITLE: 'Change password',
            ACCOUNT_SETTINGS_OLD_PASSWORD_TITLE: 'Old password',
            ACCOUNT_SETTINGS_NEW_PASSWORD_TITLE: 'New password',
            ACCOUNT_SETTINGS_OLD_PASSWORD_PLACEHOLDER: 'Type your old password',
            ACCOUNT_SETTINGS_NEW_PASSWORD_PLACEHOLDER: 'Type your new password',
            ACCOUNT_SETTINGS_CHANGE_PASSWORD_BUTTON: 'Change password',
            ACCOUNT_SETTINGS_CHANGE_DISPLAY_LANGUAGE_TITLE: 'Change display language'
        });
    });