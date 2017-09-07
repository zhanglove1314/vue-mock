var gulp = require('gulp');
var server = require('gulp-webserver');
var urlTool = require('url');
var data = [{
    img: 'images/img1_03.png',
    con: '智能机器不会代替人类，须要人类更好的学习',
    price: 857,
    num: 1
}, {
    img: 'images/img1_03.png',
    con: '智能机器不会代替人类，须要人类更好的学习',
    price: 857,
    num: 1
}, {
    img: 'images/img1_03.png',
    con: '智能机器不会代替人类，须要人类更好的学习',
    price: 857,
    num: 1
}]
gulp.task('mockserver', function() {
    gulp.src('.')
        .pipe(server({
            port: 9990,
            middleware: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                var method = req.method;
                var urlObj = urlTool.parse(req.url);
                var pathname = urlObj.pathname;
                switch (pathname) {
                    case '/index':
                        res.setHeader('content-type', 'application/json;charset=utf-8');
                        res.write(JSON.stringify(data));
                        res.end();
                }
            }
        }))

})
gulp.task('default', ['mockserver'])