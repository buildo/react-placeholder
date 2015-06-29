var path = require('path');
var webpack = require('webpack');

var paths = {
  SRC: path.resolve(__dirname, '../src'),
  EXAMPLES: path.resolve(__dirname, '.')
};

module.exports = {

  output: {
    path: paths.EXAMPLES,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=0&loose',
        include: [paths.SRC, paths.EXAMPLES],
        exclude: /node_modules/
      }
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: paths.SRC,
        exclude: /node_modules/
      }
    ]
  }

};