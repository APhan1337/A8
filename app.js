
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');

var index = require('./routes/index');
var add = require('./routes/add');
var user = require('./routes/user');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({
  defaultLayout: "",
  layoutsDir: "",
}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.login);
app.get('/required', index.required);
app.get('/completed', index.completed);
app.get('/wip', index.wip);
app.get('/print', index.print);
app.get('/journey', index.journey);
app.get('/checkpoint', index.checkpoint);

app.get('/add-comment', add.addComment);
app.post('/user/name', user.setName);
// Example route
// app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
