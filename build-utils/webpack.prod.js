const commonPaths = require('./common-paths');
const webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].css',
});

module.exports = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.jsx`],
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new UglifyJSPlugin(), miniCssExtractPlugin],
};
