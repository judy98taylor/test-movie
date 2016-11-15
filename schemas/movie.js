var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    title: String,
    doctor: String,
    year: Number,
    summary: String,
    poster: String,
    flash: String,
    country: String,
    language: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    },
});
// 每次存储前 都会调用此方法
MovieSchema.pre()