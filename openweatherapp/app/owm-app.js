angular.module('OWMApp', ['ngRoute', 'ngAnimate'])

.value('owmCities', 
    ['New York', 'Dallas', 'Chicago'])

.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl : '../app/home.html',
        controller : 'HomeCtrl' //controller alias usage here ('as' syntax)
    })
    .when('/cities/:city', {
       templateUrl: '../app/city.html',
       controller: 'CityCtrl',
       resolve: {
            //'resolve' property of the route config obj
            //to preload the city BEFORE ctrl & template are run
            city: function(owmCities, $route, $location){

                var city = $route.current.params.city;
                
                if(owmCities.indexOf(city) == -1) {

                    //use $location service to redirect to error page
                    $location.path('/error');
                    return;
                }

                return city;
            }
        }
    })
    .when('/error', {
        template : '<p>Error Page Not Found</p>'
    });
    // .run(function($rootScope, $location) {
    //     $rootScope.$on('$routeChangeError', function() {
    //         $location.path('/error');
    //     });
    // });

})

.run(function($rootScope, $location, $timeout) {

    $rootScope.$on('$routeChangeError', function() {
        $location.path("/error");
    });

    //rootScope isLoading boolean to true on route start
    $rootScope.$on('$routeChangeStart', function(){
        $rootScope.isLoading = true;
    });

    //is loading boolean = false after route change finish
    $rootScope.$on('$routeChangeSuccess', function(){
        $timeout(function(){
            $rootScope.isLoading = false;
        }, 1000);
    });
})

//controller 'as' syntax allows the use of this in controller
//instead of $scope
.controller('HomeCtrl', function($scope) {
        $scope.welcomeMessage = "Welcome Home"
    })

.controller('CityCtrl', function($scope, city) {
    $scope.city = city;
});;