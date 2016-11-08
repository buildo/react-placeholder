import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackBase, { paths } from './webpack.base';

export default {
  ...webpackBase,

  entry: path.resolve(paths.EXAMPLES, 'examples.js'),

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style', 'style.min.css')
  ]

};
