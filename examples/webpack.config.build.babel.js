import webpack from 'webpack';
import webpackBase, { paths } from './webpack.base.babel.js';

export default {
  ...webpackBase,

  entry: paths.ENTRY,

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ].concat(webpackBase.plugins)

};
