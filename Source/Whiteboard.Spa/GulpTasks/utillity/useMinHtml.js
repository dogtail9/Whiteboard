var gulp = require("gulp"),
    replace = require("gulp-replace"),
    rename = require("gulp-rename"),
    config = require('./../config')();

module.exports = function () {
    return gulp.src([config.paths.minHtml], { base: "." })
        .pipe(replace(".css", ".min.css"))
        .pipe(replace(".js", ".min.js"))
        .pipe(replace(".html", ".min.html"))
        .pipe(rename({
            extname: '.use.html'
        }))
        .pipe(gulp.dest("."));
};

module.exports.dependencies = ['html:min'];