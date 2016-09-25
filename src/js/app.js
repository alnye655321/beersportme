var app = angular.module('Beersportme', [
  'ngRoute',
  'mobile-angular-ui',
  'mobile-angular-ui.gestures',
  'Beersportme.controllers.Main',
  'Beersportme.controllers.testcrud'
]);

app.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
  $routeProvider.when('/tabs', {templateUrl:'tabs.html',  reloadOnSearch: false});
  $routeProvider.when('/swipe', {templateUrl:'swipe.html',  reloadOnSearch: false});
  $routeProvider.when('/forms', {templateUrl:'forms.html',  reloadOnSearch: false});
});


app.config(['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.useXDomain = true;

        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }

]);
