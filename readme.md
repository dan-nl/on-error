## on-error
[![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

on-error handler for express

based on the [express application generator][generator-url].

## setup
```bash
npm install dan-nl/on-error
```

## use
see [express-http-skeleton][skeleton-url] for an example of use in an application context.

```javascript
var app = express();
var server = http.createServer( app );
var onError = require( 'on-error' );

server.on( 'error', onError );
```

## license
[MIT License][mit-license]

[david-dm-image]: https://david-dm.org/dan-nl/on-error.svg
[david-dm-url]: https://david-dm.org/dan-nl/on-error
[david-dm-dev-image]: https://david-dm.org/dan-nl/on-error/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/on-error?type=dev
[generator-url]: http://expressjs.com/en/starter/generator.html
[mit-license]: https://raw.githubusercontent.com/dan-nl/on-error/master/license.txt
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/9421a43d-2e73-4193-81b9-cc0524a5241e/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/9421a43d-2e73-4193-81b9-cc0524a5241e
[skeleton-url]: https://github.com/dan-nl/express-http-skeleton/blob/master/bin/www
