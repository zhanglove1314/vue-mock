var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + '/main.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    devServer: {
        hot: true,
        port: 9990,
        host: '127.0.0.1'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
}