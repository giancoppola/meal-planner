const webpack = require('webpack'); //to access built-in plugins
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        // test: './src/test.js',
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public/js'),
    },
};