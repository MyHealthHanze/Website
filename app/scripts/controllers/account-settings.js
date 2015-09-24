'use strict';

/**
 * @ngdoc function
 * @name myHealthApp.controller:AccountSettingsCtrl
 * @description
 * # AccountSettingsCtrl
 * Controller of the myHealthApp
 */
angular.module('myHealthApp')
    .controller('AccountSettingsCtrl', function ($scope, $translate, UserData, ngToast, $state) {

        $scope.password = {'old_password': '', 'new_password': ''};
        $scope.selectedLanguage = $translate.use();

        $scope.changePassword = function (password, redirect) {
            UserData
                .changePassword(password)
                .success(function (res) {
                    // Clear the passwords
                    $scope.password = {'old_password': '', 'new_password': ''};
                    $scope.changePasswordForm.$setPristine()
                    ngToast.create({
                        className: 'info',
                        content: res.result
                    });

                    if (redirect) {
                        $state.go('bills');
                    }
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
