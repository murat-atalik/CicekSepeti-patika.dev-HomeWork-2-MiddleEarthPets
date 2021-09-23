/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.js', './src/app.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/index.html'),
    },
    compress: true,
    port: 9000,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.s[ac]ss$/i,
        use: [
          // Creates style nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'scss'],
  },
};
