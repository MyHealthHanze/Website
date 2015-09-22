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

      this.login = function (user) {
        return $http.post(urls.API + '/user/login', user);
      };

  });
