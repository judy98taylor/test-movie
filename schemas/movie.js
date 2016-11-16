var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    title: String,
    // doctor: String,
    // year: Number,
    // summary: String,
    // poster: String,
    // flash: String,
    // country: String,
    // language: String,
    // meta: {
    //     createAt: {
    //         type: Date,
    //         default: Date.now()
    //     },
    //     updateAt: {
    //         type: Date,
    //         default: Date.now()
    //     }
    // },
});
// 每次存储前 都会调用此方法
MovieSchema.pre('save', function(next) {
    // if (this.isNew) {
    //     this.meta.createAt = this.meta.updateAt = Date.now();
    // } else {
    //     this.meta.update = Date.now();
    // }
    next();
});
// 静态方法
MovieSchema.statics = {
    fetch: function(cb) {
        return this
            .find({})
            // .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function(id, cb) {
        return this
            .findOne({ _id: id })
            .exec(cb)
    }
};
// 导出模块
module.exports = MovieSchema;