/*
*	Requirejs Config
*/

window.require = {
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/lodash/dist/lodash',
        bootstrap: 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        vSearch: 'scripts/views/search',
        rMain: 'scripts/routes/main',
        templates: 'scripts/templates'
    }
};