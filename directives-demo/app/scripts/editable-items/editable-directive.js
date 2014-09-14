angular
	.module('directives-demo-app')
	.directive('makeEditable', makeEditable);

function makeEditable(){

	var directive = {

		scope: true,
		restrict: 'A',
		templateUrl: 'partials/editable-item/makeEditable-template.html',
		transclude: true,
		link: function(scope, element, attr) {
			scope.editableP = element.find('p');
		}
		// controller: function($scope, $element, $attr) {

		// }

	};

	return directive;
}

