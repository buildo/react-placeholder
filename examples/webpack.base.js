import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export const paths = {
  SRC: path.resolve(__dirname, '../src'),
  EXAMPLES: path.resolve(__dirname, '.')
};

export default {

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
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
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
