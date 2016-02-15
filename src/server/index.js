'use strict';

var DeepstreamServer = require( 'deepstream.io' )
var server = new DeepstreamServer();

// Optionally you can specify some settings, a full list of which
// can be found here //deepstream.io/docs/deepstream.html
server.set( 'host', 'localhost' );
server.set( 'port', 6020 );

// start the server
server.start();

