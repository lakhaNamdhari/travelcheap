/*global YoBackbone, Backbone*/

YoBackbone.Collections = YoBackbone.Collections || {};

(function () {
    'use strict';

    YoBackbone.Collections.Todos = Backbone.Collection.extend({

        model: YoBackbone.Models.Todos

    });

})();
