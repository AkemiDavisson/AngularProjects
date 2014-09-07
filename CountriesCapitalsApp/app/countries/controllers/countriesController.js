//countriesController.js
//loads countries list page

function countriesController($scope, $location, countriesList){

	$scope.countries = countriesList.geonames;

	$scope.goToCountry = function(countryCode){
    	$location.path('/countries/'+countryCode+'/')
    }
}

angular
	.module('cac-app')
	.controller('countriesController', countriesController)



	// controller setup if not using resolve in route
	
	// .controller('countriesController', function($scope, geoNamesApi){

	// 		geoNamesApi.countriesList.getCountries().then(function(countries){
	// 			$scope.countries = countries.geonames;
	// 		});		
	// 	})