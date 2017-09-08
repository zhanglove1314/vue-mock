var webpack = require('webpack');
module.exports = {
    entry: __dirname + '/src/list',
    output: {
        path: __dirname + '/dist', //路径
        filename: "[name].js" //文件名
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ["babel-loader"]
        }]
    },
    devServer: {
        hot: true,
        port: 9990,
        host: '127.0.0.1',
        setup(app) {
            app.get('/some', function(req, res) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('content-type', 'application/json;charset=utf-8');
                var data = [{
                    img: 'images/img1_03.png',
                    name: 'QQ看点',
                    time: '12:45',
                    con: '[精选]王俊凯也是无奈了'
                }, {
                    img: 'images/img2_06.png',
                    name: '文静',
                    time: '12:45',
                    con: '戳了你一下'
                }, {
                    img: 'images/img3_08.png',
                    name: '一声问候',
                    time: '12:45',
                    con: '朋友生日到了，送个祝福'
                }, {
                    img: 'images/img4_10.png',
                    name: '网站1506A',
                    time: '12:45',
                    con: '你好美，你好美哦！'
                }, {
                    img: 'images/img2_06.png',
                    name: '文静',
                    time: '12:45',
                    con: '戳了你一下'
                }, {
                    img: 'images/img3_08.png',
                    name: '一声问候',
                    time: '12:45',
                    con: '朋友生日到了，送个祝福'
                }, {
                    img: 'images/img4_10.png',
                    name: '网站1506A',
                    time: '12:45',
                    con: '你好美，你好美哦！'
                }, {
                    img: 'images/img3_08.png',
                    name: '一声问候',
                    time: '12:45',
                    con: '朋友生日到了，送个祝福'
                }, {
                    img: 'images/img4_10.png',
                    name: '网站1506A',
                    time: '12:45',
                    con: '你好美，你好美哦！'
                }];
                res.json(data);
            })
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]


}