const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  // this will apply to both plain `.js` files
  // AND `<script>` blocks in `.vue` files
  {
    test: /\.js$/,
    loader: 'babel-loader'
  },
  // this will apply to both plain `.css` files
  // AND `<style>` blocks in `.vue` files
  {
    test: /\.css$/,
    use: [
      'vue-style-loader',
      'css-loader'
    ]
  }
];


const plugins = [new webpack.ProgressPlugin(), new VueLoaderPlugin(),
   new HtmlWebpackPlugin({title:'webb', template:'src/index.html'})];


const config = merge(baseConfig, {
  entry: {
    webb: './src/index.js',
  },
  output: {
    filename: '[name].v1.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules
  },
  plugins: plugins,

  resolve: {

    // aliasを追加
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
});

module.exports = config;
