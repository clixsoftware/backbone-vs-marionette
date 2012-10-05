var controller = require('../controllers/home');

exports.route = function(app) {
  app.get('/', controller.index);
  app.get('/users*', controller.index);
  app.get('/reports', controller.index);
};