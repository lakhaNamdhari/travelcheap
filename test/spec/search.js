require([
	'vSearch'
], function( SearchView ){
	var view = new SearchView({$parent: $("#view")});

	mocha.run();
});