(function() {

'use strict';

function makeEditable(){

	function editController($scope, $element) {
		//set scope of editable false
		$scope.editable = false;
		$scope.buttonText = 'Edit';

		$scope.toggleEdit = function () {

			//if editable = false switch to true
			if (!$scope.editable) {
				$scope.editable = true;
				$scope.buttonText = 'Save'; //change button text
				
				$scope.editableDiv = angular.element($element).find('p');
				console.log($scope.editableDiv);
				$scope.editableDiv.focus();
			}
			else {
				$scope.editable = false;
				$scope.buttonText = 'Edit';
			}
		};
	}	

	var directive = {

		scope: true,
		restrict: 'A',
		templateUrl: 'partials/editable-item/makeEditable-template.html',
		transclude: true,
		controller: editController

	};
	return directive;
}


angular
	.module('directives-demo-app')
	.directive('makeEditable', makeEditable);

})();