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
        'ui.router',
        'satellizer',
        'ngToast'
    ])
    .constant('urls', {
        API: 'http://localhost:1337/api/v1'
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
