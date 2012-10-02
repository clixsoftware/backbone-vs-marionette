var db = require('../db/database');

exports.getUsers = function(req, res, next) {
  db.getUsers(function(err, employees) {
    res.json(employees);
  });
};

exports.getUser = function(req, res, next) {
  db.getUserById(req.params.id, function(err, employee) {
    res.json(employee);
  });
};
