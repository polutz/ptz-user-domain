const register = require('babel-register');

register({
    ignore: /node_modules\/(?!ptz-core-domain)/,
});
