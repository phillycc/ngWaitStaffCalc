'use strict';

angular.module('ngWaitStaffCalc')
  .controller('EarningsController', ['$scope', 'CustomerService', function ($scope, CustomerService) {

    console.log(CustomerService);
    /*$scope.eiTip = $scope.customers[counter].total;
    $scope.eiMeal = $scope.customers[counter].meal;
    $scope.eiAvg = $scope.customers[counter].avg;*/

    $scope.reset = CustomerService.resetEarnings;

  }]);
