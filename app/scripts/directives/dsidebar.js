'use strict';

/**
 * @ngdoc directive
 * @name myHealthApp.directive:dSidebar
 * @description
 * # dSidebar
 */
angular.module('myHealthApp')
    .directive('dSidebar', function () {
        return {
            templateUrl: function () {
                return 'views/partials/sidebar.html';
            },
            restrict: 'E'
        };
    });
