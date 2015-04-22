/*global require*/
'use strict';

require([
    'backbone',
    'rMain'
], function (Backbone, MainRouter) {
	// To enable push state routing on links
	MainRouter.enableRouting();
	
    Backbone.history.start({pushState: true});
});
