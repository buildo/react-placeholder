import path from 'path';

export const paths = {
  SRC: path.resolve(__dirname, '../src'),
  EXAMPLES: path.resolve(__dirname, '.'),
  ENTRY: path.resolve(__dirname, './examples.js')
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
        loader: 'babel',
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
