'use strict';

var path = require('path');
var webpack = require('webpack');

var paths = {
  SRC: path.resolve(__dirname, 'src'),
  TEST: path.resolve(__dirname, 'test')
};

module.exports = function (config) {
  config.set({

    browserNoActivityTimeout: 30000,

    browsers: [ 'Chrome' ],

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      'karma.js'
    ],

    preprocessors: {
      'karma.js': [ 'webpack' ],
    },

    reporters: process.env.CONTINUOUS_INTEGRATION ? [ 'bamboo', 'coverage' ] : [ 'dots', 'coverage' ],

    bambooReporter: {
      filename: 'mocha.json',
    },

    coverageReporter: {
      reporters: [
        process.env.CONTINUOUS_INTEGRATION ?
        { type: 'lcov', subdir: 'lcov-report' } :
        { type: 'html', subdir: 'html-report' }
      ],
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel?stage=0&loose',
            include: [paths.SRC, paths.TEST],
            exclude: /node_modules/
          }
        ],
        preLoaders: [
          {
            test: /\.jsx?$/,
            loader: 'isparta?{babel: {stage: 0, loose: true}}',
            include: paths.SRC,
            exclude: /node_modules/
          }, {
            test: /\.jsx?$/,
            loader: 'eslint',
            include: paths.SRC,
            exclude: /node_modules/
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test')
        })
      ]
    },

    webpackMiddleware: {
      noInfo: true //please don't spam the console when running in karma!
    }

  });
};
