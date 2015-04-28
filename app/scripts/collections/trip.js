/*global define*/

define([
    'underscore',
    'backbone',
    'mTrip'
], function (_, Backbone, TripModel) {
    'use strict';

    var TripCollection = Backbone.Collection.extend({
        model: TripModel,

        initialize: function(opts){
            opts = opts || {};
            this.source = opts.source;
            this.destination = opts.destination;
        },

        url: function(){
        	return '/api/search-results/' + this.source + '/' + this.destination;
        }
    });

    return TripCollection;
});
