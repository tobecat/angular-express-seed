'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {
    $('.carousel').carousel({
      interval: 5000,
      pause: 'false'
    });

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });


  }).
  controller('MyCtrl1', function ($scope) {

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
