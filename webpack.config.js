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
        loader: 'babel-loader!ts-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8 : true,
        keep_fnames: true
      },
      compress: {
        keep_fnames: true,
        drop_debugger: false,
        dead_code: false,
        unused: false,
        screw_ie8: true
      },
      comments: false
    }),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      chunksSortMode: function(firstChunk, secondChunk) {
        return firstChunk.id < secondChunk.id;
      }
    })
  ],
  cache: false,
  devtool: 'source-map',
  resolve: {
    extensions: ['', 'component.ts', '.ts', '.js'],
  },
};
