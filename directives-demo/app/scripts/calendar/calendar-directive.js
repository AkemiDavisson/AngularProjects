(function() {

'use strict';

function calendarDirective(){

	function link(scope){

		scope.today = function(){
			scope.calendarDate = new Date();
			scope.date.month = scope.calendarDate.getMonth();
			scope.date.year = 2014;

			var date = scope.calendarDate.getDate();

			return date;
		};

		//calendar utility
		scope.$watch('calendarDate', function(newDate, oldDate){
			scope.range = CalendarRange.getMonthlyRange(scope.calendarDate);
			
			scope.isCurrentMonth = function(date){
				var currentMonth = scope.calendarDate.getMonth();
				if (date.getMonth() === currentMonth) {
					return true;
				}

				return false;
			};

			scope.isToday = function(date){
				var today =  new Date();

				if (date.getDate() === today.getDate() &&
					date.getMonth() === today.getMonth() &&
					date.getYear() === today.getYear()) {
					return true;
				}
				return false;
			};

		});

	}

	var directive = {

		link: link,
		restrict: 'A',
		scope: {
			calendarDate:'=',
			months: '=',
			years: '=',
			date: '='
		},
		templateUrl: 'partials/calendar/calendar-template.html'

	};

	return directive;

}


angular
	.module('directives-demo-app')
	.directive('calendarDirective', calendarDirective);

})();