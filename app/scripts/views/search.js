/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'rMain'
], function ($, _, Backbone, JST, MainRouter) {
    'use strict';

    var SearchView = Backbone.View.extend({
        template: JST['app/scripts/templates/search.ejs'],

        tagName: 'form',

        className: 'tc-find-cabs',

        events: {
            'submit .tc-find-cabs': 'hSearch'
        },

        initialize: function (opts) {
            opts = opts || {};
            this.$parent = opts.$parent || $("body");
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON));
            this.$parent.empty();
            this.$parent.append(this.$el);
        },

        hSearch: function(e){
            e.preventDefault();

            // Go to Search Results page
            MainRouter.routeTo('search-results', [ $('#source').val(), $('#destination').val() ]);
        }

        destroy: function(){
            this.$parent.empty();
        }
    });

    return SearchView;
});
