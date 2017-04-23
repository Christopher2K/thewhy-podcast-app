var Webpack = require('webpack');
var Autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx',
        vendors: './src/vendor.ts'
    },

    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'awesome-typescript-loader'
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'postcss-loader', options: { plugins: function () { return [ Autoprefixer ] } } },
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'postcss-loader', options: { plugins: function () { return [ Autoprefixer ] } } },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use : [
                    {
                        loader : 'file-loader',
                        options: {
                            name: "assets/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ]
};