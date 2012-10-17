var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();
var expressLayouts = require('express-ejs-layouts');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
});

// don't use layouts in test env
if ('test' !== app.get('env')) {
  app.use(expressLayouts);
}

app.configure(function(){
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  // app.use(express.cookieParser('your secret here'));
  // app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// don't use layouts in test env
if ('test' !== app.get('env')) {
  routes.init(app);
}
else {
  require('./routes/test').init(app);
}


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
