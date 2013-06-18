'use strict';

angular.module('todoList').controller('TodoCtrl', function($scope, $filter) {
	
	$scope.todos = [
		{item:'Clone this template', done : true},
		{item:'Setup your enviroment', done : true},
		{item:'Start making nice stuff!', done : false}
	];
	
	$scope.addItem = function() {
		var newItem = $scope.newTodo;
		if (newItem && newItem.item && newItem.item.trim() != "") {
			$scope.todos.push(newItem);
			$scope.newTodo = null;
		}
	};
	
	$scope.lineThroughClass = function(done) {
		return done ? "line-through" : "";
	};
	
	$scope.undoneTasksFilter = function(val) {
		return val.done != true;
	};
	
	$scope.taskPluralize = {
		0 : 'no task',
		one : 'task',
		other : 'tasks'
	};

});
