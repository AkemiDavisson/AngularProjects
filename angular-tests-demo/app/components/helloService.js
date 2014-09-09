angular.module('HelloModule', [])

	.factory('helloService', function() {
		return function() {
			return uppercaseService('hello');
		}
	})

	.factory('uppercaseService', function(){
		return function(){
			return 'hello';
		}
	})