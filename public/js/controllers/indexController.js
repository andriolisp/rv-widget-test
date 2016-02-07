angular.module('indexController', []).controller('IndexController', function($scope, UserService, WidgetService, $cookies){
  $scope.page = 'Dashboard';

  var userId = $cookies.get('userId');
  if(userId == undefined){
    UserService.all().then(function(result){
      $scope.loggedUser = result.data[0];
    });
  } else {
    UserService.fetch(userId).then(function(result){
      $scope.loggedUser = result.data;
    });
  }

  UserService.all().then(function(result){
      $scope.users = result.data;
  });

  WidgetService.all().then(function(result){
      $scope.widgets = result.data;
  });
});
