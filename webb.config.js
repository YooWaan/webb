const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
  entry: {
    webb: './src/index.js',
  },
  output: {
    filename: '[name].v1.js',
    path: path.resolve(__dirname, 'dist')
  },

});

module.exports = config;
