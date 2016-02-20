//var RedisCacheConnector = require( 'deepstream.io-cache-redis' );
//var RedisMessageConnector = require( 'deepstream.io-msg-redis' );
var DeepstreamServer = require('deepstream.io');
var server = new DeepstreamServer();

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

        // start the server
        server.start();
    }
}

module.exports = authServer;
