var gulp = require("gulp"),
    config = require('./config')();

module.exports = function (cb) {
    gulp.watch([config.paths.less, "!" + config.paths.minCss, "!" + config.paths.concatCssDest], ['css:min']);
    gulp.watch([config.paths.ts, "!" + config.paths.minJs, "!" + config.paths.concatJsDest], ['code:jshint']);
    gulp.watch([config.paths.html, "!" + config.paths.minHtml, "!" + config.paths.useMinHtml], ['utillity:useMinHtml']);
};