var path = require('path');
var webpack = require('webpack');
var webpackBase = require('./webpack.base');
var assign = require('lodash/object').assign;

var paths = {
  SRC: path.resolve(__dirname, '../src'),
  EXAMPLES: path.resolve(__dirname, '.')
};

module.exports = assign(webpackBase, {

  entry: paths.EXAMPLES + '/examples.js',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

});
