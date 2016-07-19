var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'build')
  }, 
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      },
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};