var gulp = require("gulp"),
    typescript = require("gulp-typescript"),
    rename = require("gulp-rename"),
    config = require('./../config')();

module.exports = function (cb) {
    return gulp.src([config.paths.ts, config.paths.typings], { base: "." })
        .pipe(typescript())
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(gulp.dest("."));
};
