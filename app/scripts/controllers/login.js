'use strict';

/**
 * @ngdoc function
 * @name myHealthApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myHealthApp
 */
angular.module('myHealthApp')
    .controller('LoginCtrl', function ($scope, $auth, $state, ngToast) {

        $scope.user = {email: '', password: ''};

        $scope.loginUser = function (user) {
            $auth.login({
                email: user.email,
                password: user.password
            }).then(function () {
                ngToast.create({
                    className: 'info',
                    content: 'You are now logged in!'
                });

                $state.go('bills');
            }, function () {
                ngToast.create({
                    className: 'danger',
                    content: 'Wrong credentials, please try again!'
                });

                $scope.user.password = '';
            });
        };

    });
