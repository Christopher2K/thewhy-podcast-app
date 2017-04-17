var Webpack = require('webpack');
var WebpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var helper = require('./helpers');

module.exports = WebpackMerge(commonConfig, {
    devtool: 'eval',

    output: {
        path: helper.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
    },

    devServer: {
        hot: true,
        port: 8080,
        historyApiFallback: {
            disableDotRule: true
        },
        stats: 'minimal'
    }
});