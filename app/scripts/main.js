/*global require*/
'use strict';

require([
    'backbone',
    'rMain'
], function (Backbone, MainRouter) {
    Backbone.history.start({pushState: true});
});
