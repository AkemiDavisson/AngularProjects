
//declare module
angular.module('instagramSearchApp', [])

	.controller('InstagramSearchController', function($scope, $http){

		function init() {

			$scope.data = {

				notification: "",
				searchingFor: "" 
			}

			$scope.submitted = false;
		}

		init();

		$scope.submit = function(){

			if ($scope.searchForm.$valid) {

				//take search value trim & assign to another scope variable
				//reset search field
				$scope.data.searchingFor = $scope.data.search.trim();
				$scope.data.search = "";	

				//update notification div of search
				$scope.data.notification = 'Searching Instagram for photos tagged with "' +
										$scope.data.searchingFor + '".'

				//query the instagram API for the tag.
				$scope.getImages($scope.data.searchingFor);
			}

			else {

			};
		}

		$scope.getImages = function(searchTag) {

			var request = {

				callback: 'JSON_CALLBACK', //required callback format
				client_id: "aedbd7b335a94c4d9e8310ffa0cd477f"
			};

			//remove white space if multiple tags typed
			var searchNoWhitespace = searchTag.replace(/\s+/g, '')

			var url = "https://api.instagram.com/v1/tags/" + searchNoWhitespace + "/media/recent"

			//angular http servive
			$http({

				method: 'JSONP',
				url: url,
				params: request

			}).

			success(function(response) {

				//check for success 
				if (response.meta.code == 200) {

					$scope.images = response.data
					$scope.data.notification = 'We found ' + response.data.length +
	        							 ' results for "' + $scope.data.searchingFor + '"'

				}
				else {
					$scope.data.notification = 'No images were found for "'+ 
	        								$scope.data.searchingFor + '".'
				}
			}).

			error(function() {
				//add error functionality here
			})
		}

	})