'use strict';

/**
 * @ngdoc directive
 * @name myHealthApp.directive:dSidebar
 * @description
 * # dSidebar
 */
angular.module('myHealthApp')
    .directive('dSidebar', function ($state) {
        return {
            templateUrl: function () {
                return 'views/partials/sidebar.html';
            },
            link: function (scope, element) {
                scope.state = $state;
            },
            restrict: 'E'
        };
    });
