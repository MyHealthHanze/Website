'use strict';

/**
 * @ngdoc function
 * @name myHealthApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the myHealthApp
 */
angular.module('myHealthApp')
  .controller('FooterCtrl', function ($scope, $translate) {

      $scope.changeLanguage = function (key) {
        $translate.use(key);
      };

  });
