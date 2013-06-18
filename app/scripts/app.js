'use strict';

var todoListApp = angular.module('todoList', []).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	}).when('/todo', {
		templateUrl : 'views/todo.html',
		controller : 'TodoCtrl'
	}).otherwise({
		redirectTo : '/'
	});
});
