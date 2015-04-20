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
            opts = opts || {};
            this.$parent = opts.$parent || $('body');
            this.render();
            this.attachEvents();
        },

        /*
        *   Attaches any DOM Events
        */
        attachEvents: function(){
            this.$parent.on('submit', 'form.tc-find-cabs', this._hSearch);
        },

        /*
        *   Renders Search View
        */
        render: function () {
            this.$el.html(this.template(this.model.toJSON));
            this.$parent.empty();
            this.$parent.append(this.$el);
        },

        /*
        *   Event Handler for search
        */
        _hSearch: function(e){
            var MainRouter = require('rMain');

            e.preventDefault();

            // Go to Search Results page
            MainRouter.navigate('search-results/' + $('#source').val() + '/' + $('#destination').val(), {trigger: true});
        },

        /*
        * Destroy's view and un-bind event handlers
        */
        destroy: function(){
            this.$parent.off('submit', 'form.tc-find-cabs', this._hSearch);
            this.$parent.empty();
        }
    });

    return SearchView;
});
