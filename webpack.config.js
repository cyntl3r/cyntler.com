const { join } = require('path');
const dotenv = require('dotenv').config();
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: join(__dirname, '/src/index.tsx'),
  output: {
    path: join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      react: join(__dirname, '/node_modules/react'),
      'styled-components': join(__dirname, '/node_modules/styled-components'),
    },
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
    }),
    new CopyPlugin({
      patterns: [{ from: join(__dirname, 'public'), to: './' }],
    }),
  ],
};
