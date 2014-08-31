//CHANGE//declare module
var waitStaffCalcApp = angular.module('waitStaffCalcApp', [])

	//add controller
	waitStaffCalcApp.controller('CalcController', function($scope){

		//initialize fields
		function init(){
			$scope.data = {

				subTotal: 0,
				tip: 0,
				total: 0,
				tipTotal: 0,
				mealCount: 0,
				tipAvg: 0
			}
		}
		
		init();

		//submit function
		$scope.submit= function() {

			if ($scope.calcForm.$valid) {
				console.log('The form is valid');

				calculate();
			}
			else {
				console.log('The form is invalid');
			}
		}

		//calculate function
		function calculate(){
			
				//charges
				$scope.data.subTotal = $scope.data.mealPrice + ($scope.data.mealPrice * $scope.data.taxRate/100);
				$scope.data.tip = $scope.data.subTotal * ($scope.data.tipPercent/100);
				$scope.data.total = $scope.data.subTotal + $scope.data.tip

				//earnings
				$scope.data.tipTotal += $scope.data.tip;
				$scope.data.mealCount++;
				$scope.data.tipAvg = $scope.data.tipTotal / $scope.data.mealCount;

		}

		//clear form function
		$scope.clear = function(){

			console.log('Clear Inputs');

			$scope.data.mealPrice = "";
			$scope.data.taxRate = "";
			$scope.data.tipPercent = "";
		}

		// Reset Entire Application
		$scope.reset = function() {
			console.log('Form Reset');
			init();
		}

	});