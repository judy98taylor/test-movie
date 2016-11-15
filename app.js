var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.set('views', './views/pages');
app.set('view engine', 'jade');
// app.set('port', '3000');
app.use(bodyParser());
// __dirname是当前目录
app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port);

console.log('ok', port);

// index
app.get('/', function(req, res) {
    res.render('index', {
        title: 'imooc index',
        movies: [{
            title: '111',
            _id: 1,
            poster: 'http://i5qiniu.mtime.cn/mg/2016/10/10/160212.45410947_o.jpg?imageMogr2/thumbnail/!270x405r/gravity/North/crop/270x405/dx/0/dy/0'
        }, {
            title: '2222',
            _id: 2,
            poster: 'http://i5qiniu.mtime.cn/mg/2016/10/10/160212.45410947_o.jpg?imageMogr2/thumbnail/!270x405r/gravity/North/crop/270x405/dx/0/dy/0'
        }, {
            title: '3333',
            _id: 3,
            poster: 'http://i5qiniu.mtime.cn/mg/2016/10/10/160212.45410947_o.jpg?imageMogr2/thumbnail/!270x405r/gravity/North/crop/270x405/dx/0/dy/0'
        }, {
            title: '4444',
            _id: 4,
            poster: 'http://i5qiniu.mtime.cn/mg/2016/10/10/160212.45410947_o.jpg?imageMogr2/thumbnail/!270x405r/gravity/North/crop/270x405/dx/0/dy/0'
        }, {
            title: '5555',
            _id: 5,
            poster: 'http://i5qiniu.mtime.cn/mg/2016/10/10/160212.45410947_o.jpg?imageMogr2/thumbnail/!270x405r/gravity/North/crop/270x405/dx/0/dy/0'
        }, {
            title: '666',
            _id: 6,
            poster: 'http://i5qiniu.mtime.cn/mg/2016/10/10/160212.45410947_o.jpg?imageMogr2/thumbnail/!270x405r/gravity/North/crop/270x405/dx/0/dy/0'
        }]
    })
});
// detail
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'imooc detail',
        movie: {
            doctor: 'asd',
            country: 'asddsd',
            title: 'sad',
            year: '1111',
            poster: 'http://i5qiniu.mtime.cn/mg/2016/10/10/160212.45410947_o.jpg?imageMogr2/thumbnail/!270x405r/gravity/North/crop/270x405/dx/0/dy/0',
            language: 'asdasd',
            flash: 'asdsad',
            summary: 'asdasd'
        }
    })
});
// admin 
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: '后台录入页面',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    })
});
// list
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'imooc list',
        movies: [{
            doctor: 'list1',
            country: 'asddsd',
            title: 'sad',
            year: '1111',
            poster: 'http://i5qiniu.mtime.cn/mg/2016/10/10/160212.45410947_o.jpg?imageMogr2/thumbnail/!270x405r/gravity/North/crop/270x405/dx/0/dy/0',
            language: 'asdasd',
            flash: 'asdsad',
            summary: 'asdasd'
        }, {
            doctor: 'list2',
            country: 'asddsd',
            title: 'sad',
            year: '1111',
            poster: 'http://i5qiniu.mtime.cn/mg/2016/10/10/160212.45410947_o.jpg?imageMogr2/thumbnail/!270x405r/gravity/North/crop/270x405/dx/0/dy/0',
            language: 'asdasd',
            flash: 'asdsad',
            summary: 'asdasd'
        }]
    })
});