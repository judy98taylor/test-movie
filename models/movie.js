var mongoose = require('mongoose');
var movieSchema = require('../schemas/movie.js');
var Movie = mongoose.model('Movie', movieSchema);
// 导出模块
module.exports = Movie;