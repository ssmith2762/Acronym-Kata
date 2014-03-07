'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function () {

  }])
  .controller('MyCtrl2', [function () {

  }])
  .controller('StatesCtrl', function ($scope, $rootScope, $log, $http, $location) {
      $log.info('Hello States');
      delete $http.defaults.headers.common['X-Requested-With'];
      $http.get('http://ec2-184-73-40-119.compute-1.amazonaws.com:35125/States').success(function (data, status, headers, config) {
          $scope.states = data;
      })
      .error(function (data, status, headers, config) {
          $log.info(data);
      })
      $scope.selectState = function () {
          $rootScope.state = $scope.state
          $location.path('/cities');
      }
      //$scope.states = [{"state":"AK"},{"state":"AL"},{"state":"AR"},{"state":"AZ"},{"state":"CA"},{"state":"CO"},{"state":"CT"},{"state":"DC"},{"state":"DE"},{"state":"FL"},{"state":"GA"},{"state":"HI"},{"state":"IA"},{"state":"ID"},{"state":"IL"},{"state":"IN"},{"state":"KS"},{"state":"KY"},{"state":"LA"},{"state":"MA"},{"state":"MD"},{"state":"ME"},{"state":"MI"},{"state":"MN"},{"state":"MO"},{"state":"MS"},{"state":"MT"},{"state":"NC"},{"state":"ND"},{"state":"NE"},{"state":"NH"},{"state":"NJ"},{"state":"NM"},{"state":"NV"},{"state":"NY"},{"state":"OH"},{"state":"OK"},{"state":"OR"},{"state":"PA"},{"state":"RI"},{"state":"SC"},{"state":"SD"},{"state":"TN"},{"state":"TX"},{"state":"UT"},{"state":"VA"},{"state":"VT"},{"state":"WA"},{"state":"WI"},{"state":"WV"},{"state":"WY"}];
  })
  .controller('CitiesCtrl', function ($scope, $rootScope, $log, $http, $location) {
      $log.info('Hello Cities for ' + $rootScope.state.state);
      delete $http.defaults.headers.common['X-Requested-With'];
      $http.get('http://ec2-184-73-40-119.compute-1.amazonaws.com:35125/Cities/state/' + $rootScope.state.state).success(function (data, status, headers, config) {
          $scope.cities = data;
      })
      .error(function (data, status, headers, config) {
          $log.info(data);
      })
      $scope.selectCity = function () {
          $rootScope.city = $scope.city;
          $location.path('/detail');
      }

  })
  .controller('DetailsCtrl', function ($scope, $rootScope, $log, $http, $location) {
      $log.info('Details for ');
      delete $http.defaults.headers.common['X-Requested-With'];
      $http.get('http://ec2-184-73-40-119.compute-1.amazonaws.com:35125/City/state/' + $rootScope.state.state + '/city/' + $rootScope.city.city).success(function (data, status, headers, config) {
          $log.info(JSON.stringify(data[0].details[0]));
          $scope.details = data[0].details[0];
      })
  });