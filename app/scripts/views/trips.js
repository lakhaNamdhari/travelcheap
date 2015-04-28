/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TripsView = Backbone.View.extend({
        template: JST['app/scripts/templates/trips.ejs'],

        tagName: 'ul',

        className: 'tc-search-results',

        events: {},

        initialize: function (opts) {
            opts = opts || {};
            this.$parent = opts.$parent || $('body');
            this.source = opts.source;
            this.destination = opts.destination;

            // Render when data is populated
            this.listenTo(this.collection, 'reset', this.render);
            // Populate collection
            this.collection.fetch({reset: true});
        },

        render: function () {
            this.$el.html(this.template({
                source: this.source,
                destination: this.destination,
                data: this.collection.toJSON()
            }));
            this.$parent.empty();
            this.$parent.append(this.$el);
        }
    });

    return TripsView;
});
