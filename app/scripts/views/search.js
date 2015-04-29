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

        events: {
            'click a.btn': '_hSearch'
        },

        initialize: function (opts) {
            opts = opts || {};
            this.$parent = opts.$parent || $('body');
            this.render();
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
            var src = $('#source').val(),
                dst = $('#destination').val(),
                baseUrl = $( e.target ).attr('href');

            if ( !src.length || !dst.length ){
                e.preventDefault();
            }else{
                $(e.target).attr('href', baseUrl + '/' + src + '/' + dst);
            }
        },

        /*
        * Destroy's view and un-bind event handlers
        */
        destroy: function(){
            this.$parent.empty();
        }
    });

    return SearchView;
});
