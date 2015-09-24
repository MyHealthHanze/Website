'use strict';

/**
 * @ngdoc service
 * @name myHealthApp.user
 * @description
 * # user
 * Service in the myHealthApp.
 */
angular.module('myHealthApp')
    .service('UserData', function ($http, urls) {

        this.changePassword = function (passwords) {
            console.log(passwords);
            return $http.put(urls.API + '/user/password', passwords);
        };

    });
