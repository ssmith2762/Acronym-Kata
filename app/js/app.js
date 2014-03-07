'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'states-view', controller: 'StatesCtrl'});
  $routeProvider.when('/cities', { templateUrl: 'cities-view', controller: 'CitiesCtrl' });
  $routeProvider.when('/detail', { templateUrl: 'details-view', controller: 'DetailsCtrl' });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
