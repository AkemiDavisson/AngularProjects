angular.module('waitStaffCalcApp')

	.config(function($routeProvider){
		$routeProvider

		.when('/', {
			templateUrl: 'app/views/home.html'

		})
		.when('/new-meal', {
			templateUrl:'app/views/new-meal.html',
			controller:'newMealController'
		})
		.when('/my-earnings', {
			templateUrl: 'app/views/my-earnings.html',
			controller: 'earningsController'
		})
	})
;