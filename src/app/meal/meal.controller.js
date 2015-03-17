'use strict';

angular.module('ngWaitStaffCalc')
  .controller('MealController', ['$scope', 'CustomerService', function ($scope, CustomerService) {
    console.log("CustServ: " , CustomerService);

    $scope.submit = function(mealForm){

      CustomerService.addCustomer({
          price: Number(mealForm.price.$viewValue),
          tax: Number(mealForm.price.$viewValue)*(Number(mealForm.tax.$viewValue)/100),
          sub: Number(mealForm.price.$viewValue)+Number(mealForm.price.$viewValue)*(Number(mealForm.tax.$viewValue)/100),
          tip: Number(mealForm.tip.$viewValue)/100*(Number(mealForm.price.$viewValue)+Number(mealForm.price.$viewValue)*Number(mealForm.tax.$viewValue)/100)
      });

      $scope.ccSubtotal = CustomerService.customers[CustomerService.counter-1].sub;
      $scope.ccTip = CustomerService.customers[CustomerService.counter-1].tip;
      $scope.ccTotal = CustomerService.customers[CustomerService.counter-1].sub + CustomerService.customers[CustomerService.counter-1].tip;

      $scope.meal = {};
    }

    $scope.cancel = function (){
      $scope.meal = {};
    }

  }]);
