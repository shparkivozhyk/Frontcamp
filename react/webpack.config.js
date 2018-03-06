const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const serverConfig = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};


const browserConfig = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            }, 
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
        }]
    }
}; 
module.exports = [serverConfig, browserConfig];