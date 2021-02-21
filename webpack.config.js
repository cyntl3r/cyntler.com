const { join } = require('path');
const dotenv = require('dotenv').config();
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: join(__dirname, '/src/index.tsx'),
  output: {
    path: join(__dirname, '/dist'),
    filename: 'bundle.js',
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
  },
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
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
  ],
};
