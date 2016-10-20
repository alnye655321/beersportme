angular.module('Beersportme.controllers.Main', [])

.controller('MainController', function($rootScope, $scope, getFactory){
  $scope.swiped = function(direction) {
    alert('Swiped ' + direction);
  };
  //$scope.userID = 1;
  $rootScope.userID = 1;
  $rootScope.ladderID = 1;

  $scope.chatUsers = [
    {name: 'Carlos  Flowers', online: true},
    {name: 'Byron Taylor', online: true},
    {name: 'Jana  Terry', online: true},
    {name: 'Darryl  Stone', online: true},
    {name: 'Fannie  Carlson', online: true},
    {name: 'Holly Nguyen', online: true},
    {name: 'Bill  Chavez', online: true},
    {name: 'Veronica  Maxwell', online: true},
    {name: 'Jessica Webster', online: true},
    {name: 'Jackie  Barton', online: true},
    {name: 'Crystal Drake', online: false},
    {name: 'Milton  Dean', online: false},
    {name: 'Joann Johnston', online: false},
    {name: 'Cora  Vaughn', online: false},
    {name: 'Nina  Briggs', online: false},
    {name: 'Casey Turner', online: false},
    {name: 'Jimmie  Wilson', online: false},
    {name: 'Nathaniel Steele', online: false},
    {name: 'Aubrey  Cole', online: false},
    {name: 'Donnie  Summers', online: false},
    {name: 'Kate  Myers', online: false},
    {name: 'Priscilla Hawkins', online: false},
    {name: 'Joe Barker', online: false},
    {name: 'Lee Norman', online: false},
    {name: 'Ebony Rice', online: false}
  ];

//For Location Carosel Modal View-----------------------------------------------
//Not working well outside main controller !!! refactor !!!
  var myDataPromise = getFactory.getData('events');
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Events = result;
  });

  $scope.registerClickModal = function(eventID) {
    //$scope.modalEventID = eventID;
    var getEventData = $scope.Get_Events;
    var array = getEventData.data.events.events;
    var new_array = array.filter(function(val){
      return val.locations_id == eventID;
    });
    $scope.eventList = new_array;
  };
//Close Location Carosel Modal View---------------------------------------------


});
