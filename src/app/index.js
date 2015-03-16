'use strict';

angular.module('ngWaitStaffCalc', ['ngAnimate', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .when('/new-meal', {
        templateUrl: 'app/meal/meal.html',
        controller: 'MealController as meal'
      })
      .when('/my-earnings', {
        templateUrl: 'app/earnings/earnings.html',
        controller: 'EarningsController as earn'
      })
      .otherwise({
        redirectTo: '/home'
      });
  })
;
