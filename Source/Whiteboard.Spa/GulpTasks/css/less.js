var gulp = require("gulp"),
    less = require("gulp-less"),
    rename = require("gulp-rename"),
    config = require('./../config')();

module.exports = function (cb) {
    return gulp.src([config.paths.less], { base: "." })
        .pipe(less())
        .pipe(rename({
            extname: '.css'
        }))
        .pipe(gulp.dest("."));
};
