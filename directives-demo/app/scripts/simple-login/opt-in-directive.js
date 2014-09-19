(function() {
	
'use strict';

function optIn() {
	var directive = {

	  restrict: 'E',
      transclude: true,
      templateUrl: 'partials/simple-login/opt-in-template.html'
	};

		return	directive;
	}

angular
	.module('directives-demo-app')
	.directive('optIn', optIn);

})();