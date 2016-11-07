/* eslint no-process-exit: off,  multiline-ternary: off */

'use strict';

/**
 * module variables
 */
var error_messages = {
  'EACCES': '%bind requires elevated privileges',
  'EADDRINUSE': '%bind is already in use on %address'
};

/**
 * event listener for HTTP server "error" event
 *
 * based on the express application generator
 * @link http://expressjs.com/en/starter/generator.html
 *
 * @param {Error} error
 * @param {string} error.address
 * @param {string} error.code
 * @param {string} error.errno
 * @param {string} error.message
 * @param {number|string} error.port
 * @param {string} error.syscall
 *
 * @throws {Error}
 *
 * @returns {undefined}
 */
function onError( error ) {
  var bind;
  var error_message = error_messages[ error.code ];

  if ( error.syscall !== 'listen' ) {
    throw error;
  }

  bind = typeof error.port === 'string'
    ? 'pipe ' + error.port
    : 'port ' + error.port;

  if ( !error_message ) {
    throw error;
  }

  console.error(
    error_message
      .replace( '%bind', bind )
      .replace( '%address', error.address )
  );

  process.exit( 1 );
}

module.exports = onError;
