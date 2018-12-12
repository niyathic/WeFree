var express = require('express')
var router = express.Router();
var User = require('../models/user');
var isAuthenticated = require('../middlewares/isAuthenticated');
var nodemailer = require('nodemailer');

// Signup
router.get('/signup', function (req, res, next) {
    // debug check for all signed up users
    User.find({}, function (err, results) {
        console.log(results);
    })
    res.render('signup');
});

router.post('/signup', function (req, res, next) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const googleIntegrated = req.body.googleIntegrated.checked;
    const user = new User({ name: name, email: email, password: password, googleIntegrated: googleIntegrated, events: [] });
    var mailOptions = {
        from: 'wefree.scheduler@gmail.com',
        to: email,
        subject: 'Thanks for joining WeFree!',
        html: '<h1>Welcome to WeFree!</h1><p>We are so excited that you\'ve joined us. With WeFree, you can <b>schedule group events with ease</b>. If you are receiving this email by mistake, <a href="/delete">let us know</a>.</p>'
    };
    user.save(function (err, results) {
        if (!err) {
            // send email confirming signup
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.redirect('/');
            return;
        } else {
            res.send(err.message);
            return;
        }
    })
})

// Login
router.get('/login', function (req, res, next) {
    res.render('login');
})
router.post('/login', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    User.findOne({ email: email, password: password }, function (err, result) {
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
router.get('/logout', isAuthenticated, function (req, res, next) {
    req.session.user = '';
    res.redirect('/');
})

// Delete account
router.get('/delete', function (req, res, next) {
    res.render('delete');
})

router.post('/delete', function (req, res, next) {
    if (User.findOne({ email: req.body.deleteEmail })) {
        User.remove({ email: req.body.deleteEmail });
    }
    return;
})

// Transporter for nodemailer - to send signup confirmation email
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wefree.scheduler@gmail.com',
        pass: 'whittaker'
    }
});

module.exports = router;
