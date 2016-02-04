var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    config = require('./../config')();

module.exports = function (cb) {
    return gulp.src([config.paths.js, "!" + config.paths.minJs], { base: "." })
       .pipe(uglify())
       .pipe(rename({
           extname: '.min.js'
       }))
       .pipe(gulp.dest("."));
};

module.exports.dependencies = ['javascript:typescript'];