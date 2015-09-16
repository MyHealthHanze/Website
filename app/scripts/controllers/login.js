'use strict';

/**
 * @ngdoc function
 * @name myHealthApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myHealthApp
 */
angular.module('myHealthApp')
  .controller('LoginCtrl', function ($scope) {

      $scope.user = { email: '', password: '' };

  });
