var path = require('path');
var webpack = require('webpack');
var webpackBase = require('./webpack.base');
var assign = require('lodash.assign');

var paths = {
  SRC: path.resolve(__dirname, '../src'),
  EXAMPLES: path.resolve(__dirname, '.')
};

module.exports = assign(webpackBase, {

  entry: [
    'webpack/hot/dev-server',
    paths.EXAMPLES + '/examples.js'
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: paths.EXAMPLES,
    hot: true,
    inline: true,
    port: '8080'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]

});
