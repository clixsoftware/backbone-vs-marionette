var controller = require('../controllers/home');

exports.route = function(app) {
  app.get('/', controller.index);
};