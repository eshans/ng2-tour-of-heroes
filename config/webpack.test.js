const helpers = require('./helpers');
const loaders = require('./loaders/loaders.common');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: loaders
  }
};
