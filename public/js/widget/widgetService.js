angular.module('widgetService', [])
  //.constant('ENDPOINT_URI', 'http://localhost:4000/') //Local on Mongo
  .constant('ENDPOINT_URI', 'http://spa.tglrw.com:4000/') //RedVentures
  .service('WidgetService', function ($http, ENDPOINT_URI) {
    var service = this,
    path = 'widgets/';

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

    service.create = function (item) {
      return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
      return $http.put(getUrlForId(itemId), item);
    };
  });
