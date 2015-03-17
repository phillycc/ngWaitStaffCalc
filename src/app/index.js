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
  .service('CustomerService', function(){
    this.counter = 0;
    this.customers = [];
    this.total = 0;
    this.average = 0;

    this.addCustomer = function(customer){
      this.customers.push(customer);

      this.counter = this.customers.length;
      this.total += customer.tip;
      this.average = this.total/this.counter;

    }
    this.resetEarnings = function(){
      this.customers = [];
      this.counter = 0;
    }
  })
;
