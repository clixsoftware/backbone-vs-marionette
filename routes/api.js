var controller = require('../controllers/api');

exports.route = function(app) {
  app.get('/api/users', controller.getUsers);
  app.get('/api/users/:id', controller.getUser);
};