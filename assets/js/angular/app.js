var ba_hero = angular
  .module('ba_hero', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
  .config(($routeProvider, $locationProvider, $interpolateProvider)=> {
  	$interpolateProvider.startSymbol('((');
  	$interpolateProvider.endSymbol('))');
  	$locationProvider.hashPrefix('');
  	$routeProvider
  	  .when('/', {
  	    templateUrl: '/layout/home'
  	  })
  	  .when('/signup', {
  	    templateUrl: '/layout/signup'
  	  })
  		.when('/app', {
  	    templateUrl: '/layout/app'
  	  })
  	  .otherwise({ redirectTo: '/' });
  });
