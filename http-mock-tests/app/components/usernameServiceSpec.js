describe('usernameAvailable', function(){
	beforeEach(module('UsernameModule'));


	//injecting the $httpBackend service to mock http request
	it('should query the backend when the username is checked', inject(function(usernameAvailable, $rootScope, $httpBackend){
		
		$httpBackend.expect('GET', '/api/username-available/johnny').respond(200);

		var status = false;
		usernameAvailable('johnny').success(function(){
			status = true;
		});

		//trigger angular's digest cycle (how & when angular updates models and scope)
		$rootScope.$digest();
		//.flush() ensures the HTTP mock code is triggered
		$httpBackend.flush();
		expect(status).toBe(true);
		//ensures the mock is run even if NO HTTP request made
		$httpBackend.verifyNoOutstandingRequest();
	}));
});