const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader",
      options: { limit: 25000 }
    }]
  }
};