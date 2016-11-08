import path from 'path';
import webpack from 'webpack';
import webpackBase, { paths } from './webpack.base';

export default {
  ...webpackBase,

  entry: path.resolve(paths.EXAMPLES, '/examples.js'),

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

};
