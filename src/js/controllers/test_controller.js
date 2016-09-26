angular.module('Beersportme.controllers.Test', [])

.controller('TestController', function($scope, TestFactory){
  var dataPromise = TestFactory.getUrl();
  dataPromise.then(function(result) {
    $scope.Test_Data = result;
  });
});
