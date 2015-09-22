'use strict';

/**
 * @ngdoc overview
 * @name myHealthApp
 * @description
 * # myHealthApp
 *
 * Main module of the application.
 */
angular
    .module('myHealthApp', [
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ngCookies',
        'ui.router',
        'satellizer',
        'ngToast',
        'pascalprecht.translate'
    ])
    .constant('urls', {
        API: 'https://myhealth-hanze.herokuapp.com/api/v1'
    })
    .config(function ($translateProvider) {
        $translateProvider
            .fallbackLanguage('en')
            .determinePreferredLanguage();

        $translateProvider.useLocalStorage();

        $translateProvider.useSanitizeValueStrategy('sanitize');
    })
    .config(function ($stateProvider, $urlRouterProvider, $authProvider, urls) {
        $authProvider.loginUrl = urls.API + '/user/login';
        $authProvider.logoutRedirect = '/';

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                templateUrl: 'views/login.html'
            })
            .state('bills', {
                url: '/bills',
                templateUrl: 'views/bills.html',
                resolve: {
                    authenticated: ['$location', '$auth', function ($location, $auth) {
                        if (!$auth.isAuthenticated()) {
                            return $location.path('/login');
                        }
                    }]
                }
            });

        $urlRouterProvider.otherwise('/');
    });
