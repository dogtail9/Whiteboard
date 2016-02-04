var gulp = require("gulp"),
    replace = require("gulp-replace"),
    rename = require("gulp-rename"),
    minifyHTML = require("gulp-minify-html"),
    config = require('./../config')();

module.exports = function (cb) {
    return gulp.src([config.paths.html, "!" + config.paths.minHtml], { base: "." })
        .pipe(minifyHTML())
        .pipe(rename({
            extname: '.min.html'
        }))
        .pipe(gulp.dest("."));
};
