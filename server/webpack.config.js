const webpack = require('webpack');

import nodeExternals from 'webpack-node-externals'; // changes

const CONTEXT = path.join( __dirname, "../.." ),
  INPUT_SERVER_DIR = path.join( CONTEXT, "server" ),
  OUTPUT_SERVER_DIR = path.join( CONTEXT, "dist/server" );

export default [
  {
    name: 'server',
    target:  'node',
    context: INPUT_SERVER_DIR,
    node: {
      __dirname: false
    },
    entry: './server',
    devtool : 'source-map',
    output: {
      path: OUTPUT_SERVER_DIR,
      filename: "server.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    externals : [ nodeExternals() ]
  }
];

module.exports = function override(config,env) {
  config.resolve.fallback = {
      "zlib": false ,
     "querystring": false ,
     "path": false ,
     "crypto": false,
     "stream": false,
     "http": false,
     "url": false,
     "util": false
  }
}


