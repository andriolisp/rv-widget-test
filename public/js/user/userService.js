angular.module('userService', [])
  //.constant('ENDPOINT_URI', 'http://localhost:4000/') //Local on Mongo
  .constant('ENDPOINT_URI', 'http://spa.tglrw.com:4000/') //RedVentures
  .service('UserService', function ($http, ENDPOINT_URI) {
    var service = this,
    path = 'users/';

    function getUrl() {
      return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
      return getUrl(path) + itemId;
    }

    service.all = function () {
      return $http.get(getUrl());
    };

    service.fetch = function (itemId) {
      return $http.get(getUrlForId(itemId));
    };
  });
