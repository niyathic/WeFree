var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//var cookieSession = require('cookie-session');
var isAuthenticated = require('./middlewares/isAuthenticated');
var mongoose = require('mongoose');
var User = require('./models/user');
var Event = require('./models/event');
var Timeslot = require('./models/timeslot');
var accountRoutes = require('./routes/account');

var app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/WeFree') //mongoose connect call

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // to accept post data from ajax requests
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/account', accountRoutes);

// set the express view engine to take care of ejs within html files
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
//todo cookie session?


app.get('/', function (req, res, next) {
    res.render('landing');
});

app.post('/', isAuthenticated, function (req, res, next) {
    return;
});

app.use(function (err, req, res, next) {
    return res.send('ERROR :  ' + err.message)
})

app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port ' + (process.env.PORT || 3000))
})