'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {
    $scope.isGraduation = true;
    $scope.isWedding = false;
    $scope.isPortrait = false;

    $('.carousel').carousel({
      interval: 5000,
      pause: 'false'
    });

    $('#blueimp-gallery').data('useBootstrapModal', false);
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);

    $http({
      method: 'GET',
      url: '/api/pics',
       params: {group : 'graduation'}
    }).
    success(function (data, status, headers, config) {
      $scope.graduations = data;
    }).
    error(function (data, status, headers, config) {
      //$scope.name = 'Error!'
    });

    $http({
      method: 'GET',
      url: '/api/pics',
       params: {group : 'wedding'}
    }).
    success(function (data, status, headers, config) {
      $scope.weddings = data;
    }).
    error(function (data, status, headers, config) {
      //$scope.name = 'Error!'
    });

    $http({
      method: 'GET',
      url: '/api/pics',
       params: {group : 'portrait'}
    }).
    success(function (data, status, headers, config) {
      $scope.portraits = data;
    }).
    error(function (data, status, headers, config) {
      //$scope.name = 'Error!'
    });

    $scope.showGraduation = function() {
      $scope.isGraduation = true;
      $scope.isWedding = false;
      $scope.isPortrait = false;
    };

    $scope.showWedding = function() {
      $scope.isGraduation = false;
      $scope.isWedding = true;
      $scope.isPortrait = false;
    };

    $scope.showPortrait = function() {
      $scope.isGraduation = false;
      $scope.isWedding = false;
      $scope.isPortrait = true;
    };


  }).
  controller('MyCtrl1', function ($scope) {

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
