'use strict';

angular.module('ngWaitStaffCalc')
  .controller('MealController', function ($scope) {

    var counter = 0;
    $scope.customers = [];

    $scope.submit = function(mealForm){

      $scope.customers.push({
          meal: counter,
          price: Number(mealForm.price.$viewValue),
          tax: Number(mealForm.price.$viewValue)*(Number(mealForm.tax.$viewValue)/100),
          sub: Number(mealForm.price.$viewValue)+Number(mealForm.price.$viewValue)*(Number(mealForm.tax.$viewValue)/100),
          tip: Number(mealForm.tip.$viewValue)/100*(Number(mealForm.price.$viewValue)+Number(mealForm.price.$viewValue)*Number(mealForm.tax.$viewValue)/100)
      });

      $scope.customers[counter]['total'] = counter===0 ? $scope.customers[counter].tip : $scope.customers[counter].tip + $scope.customers[counter-1].total;
      $scope.customers[counter]['avg'] = counter===0 ? $scope.customers[counter].tip : $scope.customers[counter].total/counter;

      $scope.meal = {};
      counter+=1;
    }

    $scope.cancel = function (){
      $scope.meal = {};
    }

  });
