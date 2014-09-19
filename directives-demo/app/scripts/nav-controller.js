
(function(){

	'use strict';

	function navController($scope, $location){
		
		//nav items for ul li
		$scope.navItems = [
			{path: '/', title: 'Home'},
			{path: '/simple-login', title: 'Simple Login Directive'},
			{path: '/editable-item', title: 'Editable Item Directive'},
			{path: '/calendar', title: 'Calendar Directive'}

		];

		$scope.isActive = function(item) {
			if (item.path === $location.path()) {

				return true;
			}

			return false;
		};
	}

	navController.$inject = ['$scope', '$location'];

	angular
		.module('directives-demo-app')
		.controller('navController', navController);

})();

