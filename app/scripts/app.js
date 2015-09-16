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
        'satellizer'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
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
                templateUrl: 'views/bills.html'
            });

        $urlRouterProvider.otherwise('/');
    });
