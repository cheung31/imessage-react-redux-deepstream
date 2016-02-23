var path = require('path');

module.exports = function (app, passport) {

    // route for chat app
    app.get('/', isLoggedIn, function (req, res) {
        res.redirect('localhost:3000/new');
    });

    // login page
    app.get('/login', function (req, res) {
        res.render(path.join(__dirname, './views/login.ejs'), { message: req.flash('loginMessage') });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : 'http://localhost:3000/new', // redirect the secure app
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // signup page
    app.get('/signup', function (req, res) {
        res.render(path.join(__dirname, './views/signup.ejs'), { message: req.flash('signupMessage') });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/login', // redirect to the secure app
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    })); 

    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) {
        return next();
    }

    // if they aren't redirect the login
    res.redirect('/login');
}
