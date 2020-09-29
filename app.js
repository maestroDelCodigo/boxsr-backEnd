var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var categoriaRouter =  require ('./routes/categoria');
var clienteRouter =  require ('./routes/cliente');
var coleccionRouter =  require('./routes/coleccion');
var pedidosRouter =  require('./routes/pedidos');
var productRouter =  require('./routes/product');
var usuarioRouter =  require('./routes/usuario')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/categoria',categoriaRouter);
app.use('/cliente', clienteRouter);
app.use('/coleccion', coleccionRouter);
app.use('/pedidos', pedidosRouter);
app.use('/product', productRouter);
app.use('/usuario', usuarioRouter);

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
