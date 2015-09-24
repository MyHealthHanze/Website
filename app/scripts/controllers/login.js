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
      }).catch(function (err) {
        console.log(err);
        ngToast.create({
          className: 'danger',
          content: err.data.error
        });

        // Delete the password from the input field
        $scope.user.password = '';
      });
    };

  });
