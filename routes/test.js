var controller = require('../controllers/test');

exports.init = function(app) {
  app.get('/', controller.index);
};