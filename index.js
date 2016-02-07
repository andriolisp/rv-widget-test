var http = require("http");
var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

var app = express();
var router = express.Router();

process.title = 'widgetApp';

var connection = mongoose.connect('mongodb://localhost:27017/RVWidgets');
autoIncrement.initialize(connection);

app.set('port', 4000);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var User = require('./api/user/userModel');
var Widget = require('./api/widget/widgetModel');

require('./api/user/userRoute')(router, User);
require('./api/widget/widgetRoute')(router, Widget);

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
