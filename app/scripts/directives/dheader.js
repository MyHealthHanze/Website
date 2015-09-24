'use strict';

/**
 * @ngdoc directive
 * @name myHealthApp.directive:header
 * @description
 * # header
 */
angular.module('myHealthApp')
  .directive('dHeader', function ($auth, $state) {
    return {
      templateUrl: function() {
        return 'views/partials/header.html';
      },
      link: function (scope) {
        scope.auth = $auth;
        scope.state = $state;
      },
      controller: 'HeaderCtrl'
    };
  });
