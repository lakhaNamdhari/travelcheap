/*
*	Unit Test for Search Module
*
*	@author Lakha Singh
*/

require([
	'vSearch'
], function( SearchView ){

	describe('Seach Module', function(){
		// Parent for this view
		var viewHolder;

		// Model for this view
		var model;

		// This view
		var view;

		before(function(){
			viewHolder = $('#view');
			model = {};
			view = new SearchView({
				model: model,
				$parent: viewHolder
			});
		});

		describe('Model', function(){
			it('should be an empty object', function(){
				model.should.be.empty;
			});
		});

		describe('View', function(){
			it('should be a Form', function(){
				$('#view form').should.exist;
			});

			it('should have class tc-find-cabs', function(){
				$('#view form').should.have.class('tc-find-cabs');
			});

			it('template should have rendered', function(){
				$('#source').should.exist;
			});
		});

		after(function(){
			view.destroy();
			viewHolder = model = view = null;
		});

		// Execute test
		mocha.run();
	});
});