angular.module('appRoute', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/index.html',
    controller: 'IndexController'
  })
  .when('/users', {
    templateUrl: 'views/user.html',
    controller: 'UserController'
  })
  .when('/user/:id', {
    templateUrl: 'views/user-detail.html',
    controller: 'UserController'
  })
  .when('/widgets', {
    templateUrl: 'views/widget.html',
    controller: 'WidgetController'
  })
  .when('/widget/:id', {
    templateUrl: 'views/widget-detail.html',
    controller: 'WidgetController'
  })
  .otherwise({
    redirectTo: '/#/'
  });
}]);
