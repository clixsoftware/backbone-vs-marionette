var fs = require('fs');

// register routes
var files = ['home'];

exports.init = function(app) {
  for(i in files) {
    var r = require('./' + files[i]);
    r.route(app);
  }
};
