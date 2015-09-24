'use strict';

/**
 * @ngdoc function
 * @name myHealthApp.controller:AccountSettingsCtrl
 * @description
 * # AccountSettingsCtrl
 * Controller of the myHealthApp
 */
angular.module('myHealthApp')
    .controller('AccountSettingsCtrl', function ($scope, $translate, UserData, ngToast) {

        $scope.password = {'old_password': '', 'new_password': ''};
        $scope.selectedLanguage = $translate.use();

        $scope.changePassword = function (password) {
            UserData
                .changePassword(password)
                .success(function (res) {
                    ngToast.create({
                        className: 'info',
                        content: res.result
                    });
                })
                .error(function (err) {
                    ngToast.create({
                        className: 'danger',
                        content: err.error
                    });
                });
        };

        $scope.selectLanguage = function (language) {
            $translate.use(language);
            $scope.selectedLanguage = language;
        };

    });
