var rabobank = angular.module('raboStatProcessor',['ngRoute'])

.config(function($routeProvider){
	 $routeProvider
      .when('/', {
        templateUrl: 'views/statement.html',
        controller: 'dataprocessorController'
      })
	  
})

.run(function($rootScope,appsettings){
	$rootScope.appsettings = appsettings;
});