var sqlite3 = require('sqlite3');
var dbPath = './db/northwind.db3';

var db = new sqlite3.Database(dbPath, function(err){
  console.log(err);
});

var getUsersSql = 'select employeeId as id, lastName as lastName, firstname as firstName, ' +
  'title as title, titleofCourtesy as titleOfCourtesy, address as address, city as city, ' +
  'region as region, postalCode as postalCode, country as country, homePhone as homePhone ' +
  'from employees';

exports.getUsers = function(cb) {
  db.all(getUsersSql, cb);
};

var getUserByIdSql = getUsersSql + ' where employeeId = ?';

exports.getUserById = function(id, cb) {
  db.all(getUserByIdSql, [id], cb);
};