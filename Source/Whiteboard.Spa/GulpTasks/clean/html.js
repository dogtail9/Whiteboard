var gulp = require("gulp"),
    rimraf = require("gulp-rimraf"),
    config = require('./../config')();

module.exports = function (cb) {
    return gulp.src([config.paths.minHtml, config.paths.useMinHtml], { base: ".", read: false })
    .pipe(rimraf());
};