const path = require('path');

module.exports = {
  entry: './Business.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};