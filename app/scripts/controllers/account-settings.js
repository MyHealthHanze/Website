'use strict';

/**
 * @ngdoc function
 * @name myHealthApp.controller:AccountSettingsCtrl
 * @description
 * # AccountSettingsCtrl
 * Controller of the myHealthApp
 */
angular.module('myHealthApp')
    .controller('AccountSettingsCtrl', function ($scope, $translate) {

        $scope.password = {'oldPassword': '', 'newPassword': ''};
        $scope.selectedLanguage = $translate.use();

        $scope.changePasswordForm = function (password) {
            console.log('change password!');
            console.log(password);
        };

        $scope.selectLanguage = function (language) {
            console.log(language);
            $translate.use(language);
            $scope.selectedLanguage = language;
        }

    });
