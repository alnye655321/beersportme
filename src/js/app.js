angular.module('Beersportme', [
  'ngRoute',
  'mobile-angular-ui',
  'Beersportme.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
  $routeProvider.when('/tabs', {templateUrl:'tabs.html',  reloadOnSearch: false});
});
