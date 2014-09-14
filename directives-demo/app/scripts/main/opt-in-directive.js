angular
	.module('directives-demo-app')
	.directive('optIn', optIn);

function optIn() {
	var directive = {

	  restrict: 'E',
      transclude: true,
      templateUrl: 'partials/simple-login/opt-in-template.html'
	};

	return	directive;
};