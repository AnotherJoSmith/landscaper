// catch 404 and forward to error handler
function notFound(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}

// development error handler
// will print stacktrace
function devServerError(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
}

// production error handler
// no stacktraces leaked to user
function prodServerError(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}

module.exports = {
  notFound: notFound,
  devServerError: devServerError,
  prodServerError: prodServerError
};
