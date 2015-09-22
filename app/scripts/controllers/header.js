'use strict';

/**
 * @ngdoc function
 * @name myHealthApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the myHealthApp
 */
angular.module('myHealthApp')
    .controller('HeaderCtrl', function ($scope, $auth, $state, ngToast) {

        $scope.logout = function () {
            // Logout the user, deletes the token from LocalStorage
            $auth.logout();

            // Redirect the user to the homepage
            $state.go('home');

            // Create a toast for the user
            ngToast.create({
                className: 'info',
                content: 'You are now logged out!'
            });
        };

    });
