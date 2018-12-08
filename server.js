var express = require('express');
var path = require('path');
/ar bodyParser = require('body-parser');
//var cookieSession = require('cookie-session');
var isAuthenticated = require('./middlewares/isAuthenticated');
var mongoose = require('mongoose');
var User = require('./models/user');

var app = express();
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/WeFree') //mongoose connect call
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // to accept post data from ajax requests
app.use('/static', express.static(path.join(__dirname, 'static')));
// set the express view engine to take care of ejs within html files
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
//todo cookie session?


app.get('/', function (req, res, next) {
    //todo
});

app.post('/', isAuthenticated, function (req, res, next) {
    //todo
});

// Signup
app.get('/signup', function (req, res, next) {
    // debug check for all signed up users...
    User.find({}, function (err, results) {
        console.log(results);
    })
    res.render('signup');
});

app.post('/signup', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var user = new User({ username: username, password: password });
    user.save(function (err, results) {
        if (!err) {
            res.redirect('/'); //redirect back to home page
            return;
        } else {
            res.send(err.message);
            return;
        }
    })
})

// Login
app.get('/login', function (req, res, next) {
    res.render('login');
})
app.post('/login', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    User.findOne({ username: username, password: password }, function (err, result) {
        if (err) {
            res.send('An error occurred: ' + err.message);
            return;
        } if (!result) {
            req.session.isAuthenticated = false;
            res.send('Incorrect credentials. Please try again.');
            return;
        } if (result.password === password) {
            req.session.user = result.username;
            req.session.isAuthenticated = true;
            res.redirect('/');
            return;
        }
    })
})

// Logout
app.get('/logout', isAuthenticated, function (req, res, next) {
    req.session.user = '';
    res.redirect('/');
})
