'use strict'

describe('Todos', function() {
	
	beforeEach(function() {
		browser().navigateTo('/app/');
		browser().navigateTo('#/todo');
		
	});
	
	it('should load the correct page', function() {
		expect(browser().location().path()).toBe("/todo");
	});
	
	it('should set the correct active item on navbar', function() {
		var activeItem = element('.active > a').html();
		expect(activeItem).toBe("Todos");
	});
	
	it('should display 2 links for navigation', function() {
		var links = repeater('.nav li').count();
		expect(links).toBe(2);
	});
	
	describe('Todos Features', function() {
		
		it("should display a list of to-do items", function() {
			expect(element("#todos").html()).toBeDefined();
		});
		
		it("should have an input so I can add an item", function() {
			
			// Since Angular-Resources 'element' works with promises (asynchornous calls)
			// we might sometimes define a syncrhonous call in order to perform the expected test. 
			element('#todos').query(function(todos, done) {
				var initialCount = todos.children().length;
			
				input("newTodo.item").enter("An exciting task to do :)");
				element("#add").click();
			
				expect(element('#todos li').count()).toBe(initialCount + 1);
			
				done(); 
			});
		});
		
		it("should display the correct number of undone tasks", function() {
			expect(element(".undone-count").html()).toBe("1");
		});

		it("should have a checkbox so I can mark items as done", function() {
			element("#todos .checkbox input:last", "Todo checkbox").click();
			expect(element(".undone-count").html()).toBe("0");
		});
		
		it("should display a cool text if there are no undone tasks", function() {
			element("#todos .checkbox input:last", "Todo checkbox").click();
			expect(element(".task-counter-info:hidden").html()).toBeDefined();
			expect(element(".no-task-info:visible").html()).toBeDefined();
		})
		
	});
});