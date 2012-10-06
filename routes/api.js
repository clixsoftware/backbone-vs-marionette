var controller = require('../controllers/api');

exports.route = function(app) {
  app.get('/api/users', controller.getUsers);
  app.post('/api/users', controller.createUser);
  app.get('/api/users/:id', controller.getUser);
  app.put('/api/users/:id', controller.saveUser);
};