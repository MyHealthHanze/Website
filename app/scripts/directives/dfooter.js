'use strict';

/**
 * @ngdoc directive
 * @name myHealthApp.directive:footer
 * @description
 * # footer
 */
angular.module('myHealthApp')
  .directive('dFooter', function () {
    return {
      templateUrl: function() {
        return 'views/partials/footer.html';
      }
    };
  });
