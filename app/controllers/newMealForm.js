angular.module('waitStaffCalcApp')
	.controller('newMealController', function($scope, $rootScope){

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

		// onreset
		$scope.$on( 'reset', init );

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
			
				//charges (another controller?)
				$scope.data.subTotal = $scope.data.mealPrice + ($scope.data.mealPrice * $scope.data.taxRate/100);
				$scope.data.tip = $scope.data.subTotal * ($scope.data.tipPercent/100);
				$scope.data.total = $scope.data.subTotal + $scope.data.tip

				//earnings
				earnings = {

					tipTotal: $scope.data.tipTotal += $scope.data.tip,
					mealCount: $scope.data.mealCount++,
					tipAvg: $scope.data.tipTotal / $scope.data.mealCount
				}

				tipModel.add($scope.data.tip);

		}

		$scope.message = "TEST TEST"
	});