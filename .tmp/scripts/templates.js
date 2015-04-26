define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/search.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-group">\n\t<label for="source">Source</label>\t\n\t<input type="text" class="form-control" id="source" placeholder="where are you?">\n</div>\n<div class="form-group">\n\t<label for="destination">Destination</label>\t\n\t<input type="text" class="form-control" id="destination" placeholder="Where to Go?">\n</div>\n<a class="btn btn-default" href="search-results">find Cabs</a>';

}
return __p
};

this["JST"]["app/scripts/templates/trips.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li>\n\t<div class="row">\n\t\t<div class="col-xs-12">\n\t\t\t<h2>from Delhi to Gurgaon</h2>\n\t\t</div>\n\t</div>\n</li>\n';
 for( var i = 0; i < data.length; i++ ){;
__p += '\n\t<li>\n\t\t<div class="row">\n\t\t\t<div class="col-xs-8">\n\t\t\t\t<div class="tc-trip-brief clearfix">\n\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t<span class="cab-name">';
 data[i].cabName;
__p += '</span>\n\t\t\t\t\t\t<span class="distance">';
 data[i].distance;
__p += ' meter away</span>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t<span class="price"><span class="pefix"></span>';
 data[i].price;
__p += '</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="col-xs-4"><button class="btn btn-small">book</button></div>\n\t\t</div>\n\t</li>\n';
};
__p += '\n';

}
return __p
};

  return this["JST"];

});