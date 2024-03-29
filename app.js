var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var categoriaRouter =  require ('./routes/categoria');
var coleccionRouter =  require('./routes/coleccion');
var pedidosRouter =  require('./routes/pedidos');
var productRouter =  require('./routes/product');
var usuarioRouter =  require('./routes/usuario');
var adminRouter = require('./routes/admin')
var fileRouter = require('./routes/file');
var sugerenciaRouter= require('./routes/sugerencia');
var checkoutRouter= require('./routes/checkout');


var app = express();

global.__basedir = __dirname;

// https://www.tutorialspoint.com/expressjs/expressjs_static_files.htm
app.use('/static', express.static('./resources/static/assets/uploads'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/categoria',categoriaRouter);

app.use('/coleccion', coleccionRouter);
app.use('/pedidos', pedidosRouter);
app.use('/product', productRouter);

app.use('/usuario', usuarioRouter);
app.use('/admin', adminRouter)

app.use('/usuarios', usuarioRouter);

app.use('/file', fileRouter);

app.use('/sugerencia',sugerenciaRouter);
app.use('/checkout', checkoutRouter);



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
