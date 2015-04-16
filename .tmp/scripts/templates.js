define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/search.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-group">\n\t<input type="text" class="form-control" id="source" placeholder="Source">\n</div>\n<div class="form-group">\n\t<input type="text" class="form-control" id="dest" placeholder="Destination">\n</div>\n<input type="submit" value="find Cabs" class="btn btn-default">';

}
return __p
};

  return this["JST"];

});