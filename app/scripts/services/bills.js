'use strict';

/**
 * @ngdoc service
 * @name myHealthApp.Bills
 * @description
 * # Bills
 * Service in the myHealthApp.
 */
angular.module('myHealthApp')
  .service('BillsData', function ($http, urls) {

    this.getBills = function () {
      return $http.get(urls.API + '/bills');
    }

  });
