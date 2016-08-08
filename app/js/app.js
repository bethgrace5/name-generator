'use strict';

angular.module('name-generator', [ 'ngRoute', 'chart.js' ])
  .config(function ($routeProvider, $logProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
      /* Logging */

    $logProvider.debugEnabled(true);
  });
