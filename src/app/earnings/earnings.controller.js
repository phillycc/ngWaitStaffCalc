'use strict';

angular.module('ngWaitStaffCalc')
  .controller('EarningsController', function ($scope) {

    $scope.ccSubtotal = $scope.customers[counter].sub;
    $scope.ccTip = $scope.customers[counter].tip;
    $scope.ccTotal = $scope.customers[counter].sub + $scope.customers[counter].tip;

    $scope.eiTip = $scope.customers[counter].total;
    $scope.eiMeal = $scope.customers[counter].meal;
    $scope.eiAvg = $scope.customers[counter].avg;

    $scope.reset = function (){
      var counter = 0;
      //$scope.ctrl = {};
      $scope.customers = [];
    }

  });
