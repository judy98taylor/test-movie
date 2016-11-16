var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var _ = require('underscore')
var Movie = require('./models/movie.js');
var app = express();
var port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testMovie');

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
    // alert(123);
    console.log(req.params);
    console.log('--------------------\r\n\r\n');
    console.log(req.body);

    Movie.fetch(function(err, movies) {
        if (err) {
            console.log(err);
        }
        res.render('index', {
            title: 'imooc index',
            movies: movies,
        })
    })

});
// detail
app.get('/movie/:id', function(req, res) {
    var id = req.params.id;
    Movie.findById(id, function(err, movie) {
        res.render('detail', {
            title: 'imooc detail',
            movie: movie,
        })
    })
});

// admin 
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: '后台录入页面',
        movie: {
            // doctor: '',
            // country: '',
            title: '',
            // year: '',
            // poster: '',
            // language: '',
            // flash: '',
            // summary: ''
        }
    })
});

// admin update movie  修改跳着这页面
app.get('/admin/update/:id', function(req, res) {
    console.log(req.params);
    console.log('--修改跳着这页面------------------\r\n\r\n');
    console.log(req.body);
    var id = req.params.id;
    if (id) {
        Movie.findById(id, function(err, movie) {
            res.render('admin', {
                title: 'mooc 修改跳着这页面',
                movie: movie
            });
        })
    } else {
        _movie = new Movie({
            // doctor: movieObj.doctor,
            // country: movieObj.country,
            title: movieObj.title,
            // year: movieObj.year,
            // poster: movieObj.poster,
            // language: movieObj.language,
            // flash: movieObj.flash,
            // summary: movieObj.summary,
        });
        _movie.save(function(err, movie) {
            if (err) console.log(err);
            res.redirect('/movie/' + movie._id);
        });
    }
});

// admin post movie 电影数据存储
app.post('/admin/movie/new', function(req, res) {
    console.log(req.params);
    console.log('--电影数据存储------------------\r\n\r\n');
    console.log(req.body);
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;
    if (id !== 'undefined') {
        Movie.findById(id, function(err, movie) {
            if (err) {
                console.log(err);
            }
            _movie = _.extend(movie, movieObj);
            _movie.save(function(err, movie) {
                if (err) console.log(err);
                res.redirect('/movie/' + movie._id);
            });
        })
    } else {
        _movie = new Movie({
            // doctor: movieObj.doctor,
            // country: movieObj.country,
            title: movieObj.title,
            // year: movieObj.year,
            // poster: movieObj.poster,
            // language: movieObj.language,
            // flash: movieObj.flash,
            // summary: movieObj.summary,
        });
        _movie.save(function(err, movie) {
            if (err) console.log(err);
            res.redirect('/movie/' + movie._id);
        });
    }
});
// list
app.get('/admin/list', function(req, res) {
    Movie.fetch(function(err, movies) {
        if (err) {
            console.log(err);
        }
        res.render('list', {
            title: 'imooc list',
            movies: movies,
        })
    })
});