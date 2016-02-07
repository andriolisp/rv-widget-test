angular.module('userController', []).controller('UserController', function($scope, $cookies, $routeParams, UserService){
  $scope.page = 'User';

  if($routeParams.id) {
    $cookies.put('userId', $routeParams.id);
    UserService.fetch($routeParams.id).then(function(result){
      $scope.user = result.data;
    });
  } else {
    UserService.all().then(function(result){
      $scope.users = result.data;
    });
  }

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
});
