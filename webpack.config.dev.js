var path = require("path");
var webpack = require("webpack")

module.exports = {
  devtool: "#eval",
  entry: [
    'webpack-dev-server/client?http://localhost:3032',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    fallback: path.join(__dirname, 'node_modules')
  },
  output: {
    path: path.join(__dirname, "./static/"),
    filename: "bundle.js",
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel'],
    }]
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
