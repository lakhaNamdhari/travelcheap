/*global define*/

define([
    'jquery',
    'backbone',
    'vSearch',
    'vTrips',
    'cTrip'
], function ($, Backbone, SearchView, TripsView, TripCollection) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
        	'' : 'rSearch',
            '/search-results/:source/:destination' : 'rSearchResults'
        },

        $viewHolder: $('#view'),

        /*
        *   Seach page, which is default route.
        */
        rSearch: function(){
            // Destroy any Existing View
            if ( this.currentView ){
                this.currentView.destroy();
            }

            // Load required View
            this.currentView = new SearchView({
                model: {},
                $parent: this.$viewHolder
            });
        },

        /*
        *   Seach Results page
        */
        rSearchResults: function( source, destination ){
            var collection;

            // Destroy any Existing View
            if ( this.currentView ){
                this.currentView.destroy();
            }

            collection = new TripCollection({
                source: source,
                destination: destination
            });

            // Load required View
        	this.currentView = new SearchResultsView({
                model: {},
                $parent: this.$viewHolder
            });
        },

        /*
        *   Utility for routing to given page
        */
        routeTo: function( page , args ){
            if ( typeof page === 'string' && page.length ){
                page = '/' + page;
                if ( args && args.length ){
                    page = page + '/' + args.join('/');
                }
                history.pushState( page );
            }
        }
    });

    return MainRouter;
});
