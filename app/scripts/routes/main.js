/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
        	'' : 'rSearch',
            'search-results/:source/:destination' : 'rSearchResults'
        },

        $viewHolder: $('#view'),

        enableRouting: function(){
            $( document ).on('click', 'a:not([data-bypass])', this, this._routeEnabler );
        },

        _routeEnabler: function( e ){
            var that = e.data,
                href = $( e.target ).attr('href');

            e.preventDefault();

            that.navigate( href, true );
        },

        /*
        *   Seach page, which is default route.
        */
        rSearch: function(){
            var that = this;

            require([
                'vSearch'
            ], function( SearchView ){
                // Destroy any Existing View
                if ( that.currentView ){
                    that.currentView.destroy();
                }

                // Load required View
                that.currentView = new SearchView({
                    model: {},
                    $parent: that.$viewHolder
                });
            });
        },

        /*
        *   Seach Results page
        */
        rSearchResults: function( source, destination ){
            var that = this;

            require([
                'vTrips',
                'cTrip'
            ], function( TripsView, TripCollection ){
                var collection;

                // Destroy any Existing View
                if ( that.currentView ){
                    that.currentView.destroy();
                }

                collection = new TripCollection({
                    source: source,
                    destination: destination
                });

                // Load required View
                that.currentView = new TripsView({
                    collection: collection,
                    $parent: that.$viewHolder,
                    source: source,
                    destination: destination
                });
            });
        }
    });

    var router = new MainRouter();
    
    // This is a singleton
    return router;
});
