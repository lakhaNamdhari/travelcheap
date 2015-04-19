/*global require*/
'use strict';

require([
    'backbone',
    'rMain'
], function (Backbone, MainRouter) {
    // Instantiate our main Router
    new MainRouter();
    Backbone.history.start();
});
