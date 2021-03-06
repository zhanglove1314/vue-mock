var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.png|.jpg$/,
            use: ['url-loader']
        }, {
            test: /\.vue$/,
            include: /src/,
            loader: 'vue-loader'
        }]
    },
    resolve: {
        alias: {
            "vue": 'vue/dist/vue.js'
        }
    },
    devServer: {
        hot: true,
        port: 9990,
        host: '127.0.0.1',
        setup(app) {
            app.get('/fei', function(req, res) {
                var data = ['历史', '人文', '音乐', '情感', '历史', '人文', '音乐', '情感', '历史', '人文', '音乐', '情感'];
                res.json(data)
            })
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
}