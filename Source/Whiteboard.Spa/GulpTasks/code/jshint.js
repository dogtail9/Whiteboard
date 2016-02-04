var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    jshintConfig = require('./jshintconfig')(),
    stylish = require('jshint-stylish'),
    config = require('./../config')();

module.exports = function (cb) {
    return gulp.src([config.paths.js, "!" + config.paths.minJs], { base: "." })
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter(stylish));
};

module.exports.dependencies = ['javascript:min'];