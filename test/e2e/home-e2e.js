'use strict'

describe('Home', function() {
	
	beforeEach(function() {
		browser().navigateTo('/app/');
	});
	
	it('should load the correct page', function() {
		expect(browser().location().path()).toBe("/");
	});
	
	it('should set the correct active item on navbar', function() {
		var activeItem = element('.active > a').html();
		expect(activeItem).toBe("Home");
	});
	
	it('should display 2 links for navigation', function() {
		var links = repeater('.nav li').count();
		expect(links).toBe(2);
	});
	
	describe('Home Features', function() {
		
		it("should display a friendly welcome home", function() {
			expect(element("#welcome h1").html()).toBeDefined();
			expect(element("#welcome p").html()).toBeDefined();
		});
		
	});
});