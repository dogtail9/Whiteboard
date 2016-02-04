var gulp = require("gulp"),
    cssmin = require("gulp-cssmin"),
    rename = require("gulp-rename"),
    config = require('./../config')();

module.exports = function (cb) {
    return gulp.src([config.paths.css, "!" + config.paths.minCss], { base: "." })
        .pipe(cssmin())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest("."));
};

module.exports.dependencies = ['css:less'];