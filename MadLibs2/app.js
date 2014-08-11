
//declaring module
angular.module('madLibsApp', [])

	//add a controller to hold a model w/words for madlib
	.controller('MyCtrl', function($scope) {

		//initialize fields
		function init(){
			$scope.data = {

				maleName: "",
				cityName:"",
				foodType: "",
				adjective: "",

				strangeLocation: "",
				fictionalCharacter: "",
				number: "",
				color: ""
			}

			$scope.submitted = false;
			$scope.generatedLib = false;
		}
		
		init();

		$scope.submit = function() {
			if($scope.madLibForm.$valid) {
				console.log('The form is valid');
				$scope.generatedLib = true;
			} else {
				console.log('The form is invalid');
				$scope.generatedLib = false;
			}
		};

		//reset form
		$scope.reset = function() {

			$scope.madLibForm.$setPristine();
			
			init();
		}
	});