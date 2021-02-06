var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./controllers/connection');

//Enrutadores
var gameRouter = require('./routes/games');
var indexRouter = require('./routes/index');
var lestgoRouter = require('./routes/lestgo');
var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // le dice a reder que esta posicionado en views
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Rutas de direccionamiento
app.use('/', indexRouter);
app.use('/lestgo', lestgoRouter);
app.use('/game', gameRouter);
app.use('/admin', adminRouter);

// CRUD'S







// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;