'use strict';

/**
 * @ngdoc directive
 * @name myHealthApp.directive:header
 * @description
 * # header
 */
angular.module('myHealthApp')
  .directive('dHeader', function () {
    return {
      templateUrl: function() {
        return 'views/partials/header.html';
      }
    };
  });
