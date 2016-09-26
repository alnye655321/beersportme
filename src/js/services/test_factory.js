angular.module('Beersportme.services.Test_Factory', [])

.factory('TestFactory', function($http) {
  var url = 'http://node.nyedigital.com/api/v1/authors';
  var getUrl = function() {
    var jsonDataObj = {};
    return $http.get(url).then(function(data) {
      jsonDataObj = data;
      return data;
    });
  };
  return {
    getUrl: getUrl
  };
});
