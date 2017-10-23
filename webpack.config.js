'use strict';

var environment = process.env.NODE_ENV || 'development';
var WEBPACK_DEV_SERVER = "webpack-dev-server/client?http://localhost:8092";
var entry = {
  app: [ "./index.js" ]
};
if (environment !== "production") {
  entry.app = entry.app.concat([ WEBPACK_DEV_SERVER ]);
}

console.log('---- __dirname= ----', __dirname);

module.exports = {
    entry,
    output: {
        filename: "dist/index.js"
    }
    // ,
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style!css" }
    //     ]
    // }
};
