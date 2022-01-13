var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var passport = require('passport');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var profileRouter = require('./routes/profile');
var jwtauthRouter = require('./routes/jwtauth');
var fbRouter = require('./routes/fbRouter');
var friendsRouter = require('./routes/friendsRouter');

var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');

var app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB =
  'mongodb+srv://moritz:kH5idR70RfYH3fPa@cluster0.yaqdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
require('./passport');

// Routes reference
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter);
app.use('/friends', friendsRouter);
app.use('/jwtauth', jwtauthRouter);
app.use('/auth', fbRouter);

app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
