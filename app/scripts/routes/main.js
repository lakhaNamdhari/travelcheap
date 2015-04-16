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

        rSearch: function(){
        	this.currentView = new SearchView({$parent: this.$viewHolder});
        }
    });

    return MainRouter;
});
