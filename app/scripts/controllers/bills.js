'use strict';

/**
 * @ngdoc function
 * @name myHealthApp.controller:BillsCtrl
 * @description
 * # BillsCtrl
 * Controller of the myHealthApp
 */
angular.module('myHealthApp')
    .controller('BillsCtrl', function ($scope, BillsData, ngToast) {

        $scope.bills = [];

        $scope.$on('$stateChangeSuccess', function () {
            BillsData
                .getBills()
                .success(function (response) {
                    $scope.bills = response.result;
                })
                .error(function (error) {
                    ngToast.create({
                        className: 'danger',
                        content: error.error
                    });
                });
        });
    });
