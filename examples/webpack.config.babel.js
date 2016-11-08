import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackBase, { paths } from './webpack.base';

export default {
  ...webpackBase,

  entry: [
    'webpack/hot/dev-server',
    path.resolve(paths.EXAMPLES, 'examples.js')
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
    }),
    new ExtractTextPlugin('style', 'style.min.css')
  ]

};
