const GasPlugin = require('gas-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/main.ts',
  output: {
    filename: '[name].js',
    path: `${__dirname}/build`,
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [{ test: /\.ts?$/, loader: 'awesome-typescript-loader' }],
  },
  plugins: [
    new GasPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html', inject: false }),
  ],
};
