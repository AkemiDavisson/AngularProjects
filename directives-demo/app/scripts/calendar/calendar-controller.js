(function() {

'use strict';
	
function calendarController($scope){

	    //set current date
		var today = new Date();
		var	month = today.getMonth();
		var	year = today.getFullYear();

		var	monthsArr = ['January', 'February', 'March', 'April', 'May', 
						'June', 'July','August', 'September', 'October',
						'November', 'December'];
		var	yearArr = [];
	    var	past = year - 20;
	    var	future = year + 20;

	    //create year array for dropdown (20 years +/-)
		for (var i=past; i<=future; i++) {
			yearArr.push(i);
		}

		$scope.months = monthsArr;
		$scope.years = yearArr;
		$scope.selectMonth = month;
		$scope.selectYear = year;

		//scope date.collection
		$scope.date = {
			month: month,
			year: year
		};

		//watchCollection
		$scope.$watchCollection('date', function (newDate, oldDate) {
			$scope.calendarDate = (new Date($scope.date.year, $scope.date.month, 1));
		});

}

calendarController.$inject =['$scope'];

angular
	.module('directives-demo-app')
	.controller('calendar-controller', calendarController);

})();
