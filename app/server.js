#!/usr/bin/env node
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('landscaper');

var config = require("app/config");
var middleware = require("app/middleware");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'site'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

[
  "app/site/routes"
].forEach(function (routePath) {
    require(routePath)(app);
});

//FINALLY, use any error handlers
app.use(middleware.notFound);

if(app.get('env') === 'development'){
  app.use(middleware.devServerError);
}
app.use(middleware.prodServerError);

app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    process.exit(10);
  }
  console.log("Starting server!");
});
