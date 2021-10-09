const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/pages/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'public/index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },plugins: [
    new CopyWebpackPlugin([{
      from: './public/*.*',
      to: '.',
      force:true
    }])
  ]
}