'use strict';

angular.module('directives-demo-app', ['ngAnimate', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/simple-login', {
        templateUrl: 'partials/simple-login/simple-login.html'
      })
      .when('/editable-item', {
        templateUrl: 'partials/editable-item/editable-item.html'
      })
      .when('/calendar', {
        templateUrl: 'partials/calendar/calendar.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
