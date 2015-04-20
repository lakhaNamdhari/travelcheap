/*global define*/

define([
    'underscore',
    'backbone',
    'mTrip'
], function (_, Backbone, TripModel) {
    'use strict';

    var TripCollection = Backbone.Collection.extend({
        model: TripModel,

        initialize: function(){
        	this.fetch({reset: true});
        },

        url: function(){
        	return '/services/' + this.source + '/' + this.destination;
        }
    });

    return TripCollection;
});
