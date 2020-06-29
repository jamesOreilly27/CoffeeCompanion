const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js',
    globalObject: 'this'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        plugins: ['lodash'],
        presets: ['react', 'es2015', 'env']
      }
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader",
      options: { limit: 25000 }
    }]
  },
  plugins: [
    new LodashModuleReplacementPlugin({ "currying": true, "flattening": true }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin(),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
          vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              enforce: true,
              chunks: 'all'
          }
      }
    }
  }
}
