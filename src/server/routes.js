var path = require('path');

module.exports = function (app, passport) {

    // route for chat app
    app.get('/', isLoggedIn, function (req, res) {
        res.redirect('localhost:3000/new');
    });

    // login page
    app.get('/login', function (req, res) {
        res.render(path.join(__dirname, './views/login.jade'));
    });

    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : 'localhost:3000/new',
            failureRedirect : '/fuck'
        })
    );

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

    // if they aren't redirect them to the login page
    res.redirect('/login');
}
