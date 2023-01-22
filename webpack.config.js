const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  output: {
    library: {
      name: 'Modal',
      type: 'umd',
    },
    umdNamedDefine: true,
    globalObject: 'this'
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.js'],
      exclude: [
        '/node_modules/'
      ],
    })
  ],
  module: {
    rules: [
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
