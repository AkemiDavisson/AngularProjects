angular
	.module('directives-demo-app')
	.directive('makeEditable', makeEditable);

function makeEditable(){

	var directive = {

		scope: true,
		restrict: 'A',
		templateUrl: 'partials/editable-item/makeEditable-template.html',
		transclude: true,
		link: function(scope, element) {
			scope.editableDiv = element.find('div');
		},
		controller: function($scope, $element) {
			//set scope of editable false
			$scope.editable = false;
			$scope.buttonText = 'Edit';

			$scope.toggleEdit = function () {

				//if editable = false switch to true
				if (!$scope.editable) {
					$scope.editable = true;
					$scope.buttonText = 'Save'; //change button text
					
					$scope.editableDiv.focus();
				}
				else {
					$scope.editable = false;
					$scope.buttonText = 'Edit';
				}
			}
		}

	};

	return directive;
}

