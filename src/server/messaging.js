//var RedisCacheConnector = require( 'deepstream.io-cache-redis' );
//var RedisMessageConnector = require( 'deepstream.io-msg-redis' );
var DeepstreamServer = require('deepstream.io');
var server = new DeepstreamServer();
var cookieParser = require('cookie-parser');
var cookieSecret = require('../../config/auth').cookieSecret;
var User = require('./models/user');

var authServer = {
    start: function () {
        // Optionally you can specify some settings, a full list of which
        // can be found here //deepstream.io/docs/deepstream.html
        server.set( 'host', 'localhost' );
        server.set( 'port', 6020 );

        /*
        server.set( 'cache', new RedisCacheConnector({
            port: 6379,
            host: 'localhost' 
        }));

        server.set( 'messageConnector', new RedisMessageConnector({
            port: 6379,
            host: 'localhost' 
        }));
        */

        server.set( 'permissionHandler', {
            isValidUser: function( connectionData, authData, callback ) {
                if (authData.sid) {
                    var body = new Buffer(authData.sid, 'base64').toString('utf8');
                    var jsonBody = JSON.parse(body);
                    var userId = jsonBody.passport.user;
                    
                    User.findById(userId, callback);
                }
            },

            canPerformAction: function( username, message, callback ) {
                callback( null, true );
            },

            onClientDisconnect: function( username ){} // this one is optional
        });

        // start the server
        server.start();
    }
}

module.exports = authServer;
