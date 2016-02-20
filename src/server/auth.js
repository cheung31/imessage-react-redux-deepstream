var path = require('path');
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8001;
var mongoose = require('mongoose');
var passport = require('passport');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var mongoStore = require('connect-mongo')(session);
var passportConfigurer = require('../../config/passport');

var authServer = {
    start: function () {
        var configDB = require('../../config/database.js');

        // configuration ===============================================================
        // Get Mongo credentials
        var databaseUrl = 'mongodb://' + configDB.host + '/' + configDB.name;
        mongoose.connect(databaseUrl); // connect to our database

        passportConfigurer(passport);

        // set up our express application
        app.use(morgan('dev')); // log every request to the console
        app.use(bodyParser()); // get information from html forms

        app.set('view engine', 'jade'); // set up jade for templating

        // required for passport
        app.use(cookieParser());
        app.use(cookieSession({ secret: 'ch4t5evar' }));
        app.use(session({
          resave: true,
          saveUninitialized: true,
          secret: 'ch4t5evar',
          store: new mongoStore({
            url: databaseUrl,
            collection : 'sessions'
          })
        }));
        // use passport session
        app.use(passport.initialize());
        app.use(passport.session());

        // routes ======================================================================
        require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

        app.use(express.static(path.join(__dirname, '../../static')));

        // launch ======================================================================
        app.listen(port);
        console.log('Serving app on port ' + port);
    }
};

module.exports = authServer;
