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

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/wefree') //mongoose connect call

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // to accept post data from ajax requests
//app.use('/static', express.static(path.join(__dirname, 'static')));

// serve files from the public directory
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port ' + (process.env.PORT || 3000))
})

// set the express view engine to take care of ejs within html files
app.engine('html', require('ejs').__express);

//app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'html');
//todo cookie session?

app.use('/account', accountRoutes);


app.get('/', function (req, res, next) {
    console.log(req)
    //res.sendFile(__dirname + '/index.html');
});

app.post('/', isAuthenticated, function (req, res, next) {
    return;
});

app.use(function (err, req, res, next) {
    return res.send('ERROR :  ' + err.message)
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/public', 'index.html'));
});