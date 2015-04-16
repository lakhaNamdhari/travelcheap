/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var SearchView = Backbone.View.extend({
        template: JST['app/scripts/templates/search.ejs'],

        tagName: 'form',

        className: 'tc-find-cabs',

        events: {},

        initialize: function (opts) {
            this.listenTo(this.model, 'change', this.render);

            opts = opts || {};
            opts.$parent = opts.$parent || $("body");
        },

        render: function () {
            this.$el.html(this.template({}));
            this.$parent().empty();
            this.$parent.append(this.$el);
        }
    });

    return SearchView;
});
