const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

console.log(baseConfig);

const config = merge(baseConfig, {
  entry: {
    'webb-cli': './bin/serve.js'
  },
  output: {
    filename: '[name].v1.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node'
});

module.exports = config;
