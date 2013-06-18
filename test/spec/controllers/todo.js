'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('todoList'));

  var TodoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));
  
  function pushItem(item, done) {
 	scope.newTodo = {item: item, done: done};
 	scope.addItem();
  }

 it ("should have a list of to-do items.", function() {
 	expect(scope.todos).toBeDefined();
 });
 
 it ("should add to-do items to the to-do list", function() {
 	var listSize = scope.todos.length;
 	pushItem("New Item", false);
 	expect(scope.todos.length).toBe(listSize + 1);
 	
 	var popItem = scope.todos.pop();
 	expect(popItem.item).toBe("New Item");
 	expect(popItem.done).toBe(false);
 });
 
 it ("shouldn't accept an empty item", function() {
 	var listSize = scope.todos.length;
 	pushItem(null, false);
 	pushItem("", false);
 	pushItem("  ", false);
 	
 	expect(scope.todos.length).toBe(listSize);
 });
 
 it ("should return line-through class properly", function() {
 	expect(scope.lineThroughClass(true)).toBe('line-through');
 	expect(scope.lineThroughClass(false)).toBe('');
 	expect(scope.lineThroughClass(null)).not.toBe('line-through');
 });
 
});
