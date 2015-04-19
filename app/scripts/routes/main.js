/*global define*/

define([
    'jquery',
    'backbone',
    'vSearch'
], function ($, Backbone, SearchView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
        	"" : "rSearch"
        },

        $viewHolder: $("#view"),

        /*
        *   Seach page, which is default route.
        */
        rSearch: function(){
        	this.currentView = new SearchView({
                model: {},
                $parent: this.$viewHolder
            });
        }
    });

    return MainRouter;
});
