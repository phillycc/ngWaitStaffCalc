'use strict';

angular.module('ngWaitStaffCalc')
  .controller('MainCtrl', function ($scope) {

    var counter = 0;
    $scope.customers = [{}];

    $scope.submit = function(mealForm){
      counter+=1;

      $scope.customers.push({
          meal: counter,
          price: Number(mealForm.price.$viewValue),
          tax: Number(mealForm.price.$viewValue)*Number(mealForm.tax.$viewValue)/100,
          sub: Number(mealForm.price.$viewValue)+Number(mealForm.price.$viewValue)*Number(mealForm.tax.$viewValue)/100,
          tip: Number(mealForm.tip.$viewValue)/100*(Number(mealForm.price.$viewValue)+Number(mealForm.price.$viewValue)*Number(mealForm.tax.$viewValue)/100)
      });

      $scope.ccSubtotal = $scope.customers[counter].sub;
      $scope.ccTip = $scope.customers[counter].tip;
      $scope.ccTotal = $scope.customers[counter].sub + $scope.customers[counter].tip;

      $scope.customers[counter]['total'] = counter===1 ? $scope.customers[counter].tip : $scope.customers[counter].tip + $scope.customers[counter-1].total;
      $scope.customers[counter]['avg'] = counter===1 ? $scope.customers[counter].tip : $scope.customers[counter].total/counter;

      $scope.eiTip = $scope.customers[counter].total;
      $scope.eiMeal = $scope.customers[counter].meal;
      $scope.eiAvg = $scope.customers[counter].avg;
    }

    $scope.cancel = function (){
      
    }

    $scope.reset = function (){
      counter = 0;
      $scope.customers = [{}];
    }

  });
