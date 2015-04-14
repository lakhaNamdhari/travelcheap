/*global YoBackbone, Backbone*/

YoBackbone.Models = YoBackbone.Models || {};

(function () {
    'use strict';

    YoBackbone.Models.Todo = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
