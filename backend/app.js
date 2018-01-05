"use strict";
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors')
var index = require('./routes/index');
var login = require('./routes/ActiveDirectoryLoginRoute');
var jdViewRoute = require('./routes/ViewPositionsRoute');
var offersRoute = require('./routes/CandidateOfferRoute');
let jobCreationRoute = require('./routes/JobCreationRoute');
let getAllPositions = require('./routes/getAllPositions');
let newCandidate = require('./routes/AddCandidateProfileInfoRoute');
let schedule = require('./routes/ScheduleInterviewRoute');
let feedback = require('./routes/GetInterviewerFeedback');
var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../dist')));
//app.get('*', (req, res) => {


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//** End **/
app.use('/api/user',login);
app.use('/api/view',jdViewRoute);
app.use('/api/offer',offersRoute);
app.use('/api/jobcreation',jobCreationRoute);
app.use('/api/dashboard',getAllPositions);
app.use('/api/candidate',newCandidate);
app.use('/api/schedule',schedule);
app.use('/api/feedback',feedback);


app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
