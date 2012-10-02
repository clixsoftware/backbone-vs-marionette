var fs = require('fs');

// register routes
var files = ['home', 'api'];

exports.init = function(app) {
  for(i in files) {
    var r = require('./' + files[i]);
    r.route(app);
  }
};
