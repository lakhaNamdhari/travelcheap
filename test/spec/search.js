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

		var selectSuggestion = function( field, keycode ){
			field.trigger('keyup', {keyCode: keycode || 64});
			field.siblings('.suggestions').find('.item').trigger('click');
		};

		before(function(){
			viewHolder = $('#view');
			model = {};
			view = new SearchView({
				model: model,
				$parent: viewHolder
			});
		});

		describe('suggestions should come-up', function(){
			var checkSuggestions = function( field ){
				var suggestions = field.siblings('.suggestions');

				suggestions.should.be.hidden;
				// Mimicking key press
				field.trigger('keyup', {keyCode: 64});
				suggestions.should.be.visible.and.should.not.be.empty;
			};

			it('when user types Source', function(){
				checkSuggestions( $('#source') );
			});

			it('when user types Destination', function(){
				checkSuggestions( $('#destination') );
			})
		});

		describe('No search on empty fields', function()
			it('when source is empty, destination is filled', function(){
				var urlAfter, urlBefore;
				
				selectSuggestion( $('#destination') );
				urlBefore = location.pathname
				$('#view btn').trigger('click');
				urlAfter = location.pathname;
				urlBefore.should.be.equal.to.urlAfter;
			});

			it('when source is filled, destination is empty', function(){
				var urlAfter, urlBefore;
				
				selectSuggestion( $('#source') );
				urlBefore = location.pathname
				$('#view btn').trigger('click');
				urlAfter = location.pathname;
				urlBefore.should.be.equal.to.urlAfter;
			});

			it('when source is empty, destination is empty', function(){
				var urlAfter, urlBefore;

				urlBefore = location.pathname
				$('#view btn').trigger('click');
				urlAfter = location.pathname;
				urlBefore.should.be.equal.to.urlAfter;
			});
		});

		it('Should search', function(){
			selectSuggestion( $('#source') );
			selectSuggestion( $('#destination'), 65 );

			urlBefore = location.pathname
			$('#view btn').trigger('click');
			urlAfter = location.pathname;
			urlBefore.should.not.be.equal.to.urlAfter;

		})

		after(function(){
			view.destroy();
			viewHolder = model = view = null;
		});

		// Execute test
		mocha.run();
	});
});