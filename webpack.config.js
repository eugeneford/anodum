path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/index.js',
    library: 'Anodum',
    libraryTarget: 'umd',
    libraryExport: 'default',
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
