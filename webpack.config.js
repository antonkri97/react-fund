var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

module.exports = {
  entry: './app/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.(js)$/, 
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              "env",
              "react"
            ],
            plugins: ["transform-runtime", "transform-object-rest-spread"]
          }
        },
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new FlowStatusWebpackPlugin({
      failOnError: true
    })
  ]
};
