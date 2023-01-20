const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  output: {
    library: 'Modal',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {modules: 'commonjs'}]],
          plugins: ['add-module-exports']
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
