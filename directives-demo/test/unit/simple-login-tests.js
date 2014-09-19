// 'use strict';

// var 	$scope,
// 		$httpBackend,
// 		element,
// 		compiled,
// 		html; 

// 	beforeEach(function(){

// 		module('directives-demo-app',  
// 		'partials/simple-login/opt-in-template.html');

// 		inject(function(_$rootScope_, _$compile_){

// 			html = "";
// 			html += '<div class="container">';
// 			html += 	'<div class="jumbotron">'
// 			html += 		'<div class="row">';
// 			html += 			'<opt-in>';
// 			html += 				'<div class="brand-logo pull-left"></div>';
// 			html += 			'</opt-in>';
// 			html += 		'</div>';
// 			html += 	'</div>';
// 			html += '</div>';

// 			$scope = _$rootScope_.$new();
// 			compiled = _$compile_(html);
// 			element = compiled($scope);	
// 			$scope.$digest();

// 		});

// 	});


// describe('opt-in', function(){

// 	it('should render the element correctly', function(){


// 		expect(element.find('form').length).toBe(1);
// 		expect(element.find('span').length).toBe(1);
// 		expect(element.find('div').length).toBe(1);
// 	});
 
// });


var body,
	element,
	html,
	scope

	beforeEach(function(){

		module('directives-demo-app');
		module('my.templates');
	});

	describe('opt-in', function(){

		it('should render directive',
			inject(function($compile, $rootScope){

				html = "";
				html += '<div>';
				html += '<opt-in>';
				html += '<div class="brand-logo pull-left"></div>';
				html += '</opt-in>';
				html += '</div>';


				body = angular.element(document.body);
				element = angular.element(html);
				body.append(element);

				scope = $rootScope.$new();
				$compile(element)(scope);
				scope.$digest(); 

				expect(element.find('form').length).toBe(1);

			 }));
	});