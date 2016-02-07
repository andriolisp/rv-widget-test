angular.module('widgetController', []).controller('WidgetController', function($scope, $cookies, $routeParams, WidgetService, UserService){
  $scope.page = 'Widget';

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

  if($routeParams.id) {
    if($routeParams.id > -1) {
      WidgetService.fetch($routeParams.id).then(function(result){
        $scope.widget = result.data;
      });

      $scope.save = function(id, widget) {
        $scope.$broadcast('show-errors-check-validity');

        if ($scope.widgetForm.$invalid) { return; }
        else {
          widget.melts = widget.melts == true;
          
          WidgetService.update(id, widget).success(function(data,status){
            alert('Widget updated successfully');
            location.href='#widgets';
          });
        }
      };
    } else {
      $scope.save = function(widget) {
        $scope.$broadcast('show-errors-check-validity');

        if ($scope.widgetForm.$invalid) { return; }
        else {
          widget.melts = widget.melts == true;

          WidgetService.create(widget).success(function(data,status){
            alert('Widget added successfully');
            location.href='#widgets';
          });
        }
      };
    }
  } else {
    WidgetService.all().then(function(result){
        $scope.widgets = result.data;
    });
  }
});
