var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendors: './src/vendors.ts',
    browser: './src/main.browser.ts'
  },
  output: {
    path: './dist/',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.html/,
        loader: 'raw-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      chunksSortMode: "dependency"
    })
  ],
  cache: false,
  devtool: 'source-map',
  resolve: {
    extensions: ['', 'component.ts', '.ts', '.js'],
  },
};
