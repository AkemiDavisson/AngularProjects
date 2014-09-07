//countryController.js
//loads country detail page


function countryController($scope, country, capital, neighbours){

	//country service
	$scope.country = country.geonames[0];

	//capital service
	$scope.capital = capital.geonames[0];

	//neighbours service
	$scope.neighbours = neighbours.geonames;
}

angular
	.module('cac-app')
	.controller('countryController', countryController);