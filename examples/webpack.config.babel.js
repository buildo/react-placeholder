import webpack from 'webpack';
import webpackBase, { paths } from './webpack.base.babel.js';

export default {
  ...webpackBase,

  entry: [
    'webpack/hot/dev-server',
    paths.ENTRY
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
};
