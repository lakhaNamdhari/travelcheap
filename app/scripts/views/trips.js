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

        initialize: function () {
            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.collection.toJSON);
            this.$parent.empty();
            this.$parent.append(this.$el);
        }
    });

    return TripsView;
});
