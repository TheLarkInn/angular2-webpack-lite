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
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].map',
    chunkFilename: '[chunkhash].js'
  },
  recordsPath: path.join(__dirname, "records.json"),
  ts: {
    compiler: '@angular/tsc-wrapped'
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['browser', 'vendors']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      name: 'inline',
      filename: 'inline.js',
      sourceMapFilename: 'inline.map'
    }),
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
