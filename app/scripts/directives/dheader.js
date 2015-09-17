'use strict';

/**
 * @ngdoc directive
 * @name myHealthApp.directive:header
 * @description
 * # header
 */
angular.module('myHealthApp')
  .directive('dHeader', function ($auth) {
    return {
      templateUrl: function() {
        return 'views/partials/header.html';
      },
      link: function (scope, element) {
        scope.auth = $auth;
      },
      controller: 'HeaderCtrl'
    };
  });
