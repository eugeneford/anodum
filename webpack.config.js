path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/anodum.js',
    library: 'anodum',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/')
      ],
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['.js']
  }
};
