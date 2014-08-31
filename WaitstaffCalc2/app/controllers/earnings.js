angular.module('waitStaffCalcApp')
	.controller('earningsController', function($scope, $rootScope) {

		//init
		function init() {
			$scope.data = {
				tip:
				 {
				 	total: tipModel.amount,
				 	average: tipModel.amount / tipModel.mealCount || 0
				 },

				 mealCount: tipModel.mealCount
			};

		}

		init();

		// Reset Entire Application
		$scope.reset = function() {
			console.log('Form Reset');
			tipModel.init();
			init();
			$rootScope.$broadcast( 'reset' );
		}

	});