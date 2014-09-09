describe('helloService', function() {

	//beforeEach needed to instantiate the module
	//makes parts of module available to Spec
	beforeEach(module('HelloModule'));

	//inject helloService into function so it is available to spec code
	it('should return "hello" when called', inject(function(helloService){

			expect(helloService()).toBe("hello");
	}));
});


describe('helloService2', function(){

	beforeEach(module('HelloModule'));

	it('should return "hello" when called', function(){
		//use $provide service to mock the uppercaseService
		module(function($provide) {
			$provide.value('uppdercaseService', function(value){
				return value;
			});
		});

	inject(function(helloService){
			expect(helloService()).toBe('hello');
		});

	});
});