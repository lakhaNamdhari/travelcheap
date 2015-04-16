/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        vSearch: 'views/search',
        rMain: 'routes/main'
    }
});

require([
    'backbone',
    'rMain'
], function (Backbone, MainRouter) {
    // Instantiate our main Router
    new MainRouter();
    Backbone.history.start();
});
