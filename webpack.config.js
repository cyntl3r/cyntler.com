require('dotenv').config();
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      templateParameters: {
        title: process.env.APP_TITLE,
      },
    }),
    new CopyPlugin({
      patterns: [{ from: join(__dirname, 'public'), to: './' }],
    }),
    new DotenvPlugin(),
  ],
};
