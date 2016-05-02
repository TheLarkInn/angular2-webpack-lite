var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    browser: './src/main.browser.ts',
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
      { test: /\.ts$/, loader: 'babel!ts-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // beautify: true, //debug
      // mangle: false, //debug
      // dead_code: false, //debug
      // unused: false, //debug
      // deadCode: false, //debug
      // compress: {
      //   screw_ie8: true,
      //   keep_fnames: true,
      //   drop_debugger: false,
      //   dead_code: false,
      //   unused: false
      // }, // debug
      // comments: true, //debug

      beautify: false, //prod

      mangle: {
        screw_ie8 : true,
        keep_fnames: true
      }, //prod

      compress: {
        keep_fnames: true,
        drop_debugger: false,
        dead_code: false,
        unused: false,
        screw_ie8: true
      }, //prod

      comments: false //prod
    }),
  ],
  cache: false,
  devtool: 'source-map',
  resolve: {
    extensions: ['', 'component.ts', '.ts', '.js'],

    // alias: {
    //   '@angular/core': path.resolve(__dirname, 'node_modules/@angular/core/esm/core.js'),
    //   '@angular/platform-browser': path.resolve(__dirname, 'node_modules/@angular/platform-browser/esm/platform_browser.js'),
    //   '@angular/router': path.resolve(__dirname, 'node_modules/@angular/router/esm/router.js'),
    //   '@angular/http': path.resolve(__dirname, 'node_modules/@angular/http/esm/http.js')
    // },
  },

};
