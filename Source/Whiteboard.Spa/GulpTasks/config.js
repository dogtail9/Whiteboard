//var project = require("./../project.json");

module.exports = function () {
    var config = {};
    config.paths = GetPaths();

    return config;
};

function GetPaths() {
    var paths = {
        webroot: "./wwwroot/"
    };

    //Javascript
    paths.ts = paths.webroot + "js/**/*.ts";
    paths.js = paths.webroot + "js/**/*.js";
    paths.minJs = paths.webroot + "js/**/*.min.js";
    paths.typings = "./typings/**/*.d.ts";

    // CSS
    paths.less = paths.webroot + "css/**/*.less";
    paths.css = paths.webroot + "css/**/*.css";
    paths.minCss = paths.webroot + "css/**/*.min.css";

    // HTML
    paths.html = paths.webroot + "**/*.html";
    paths.minHtml = paths.webroot + "**/*.min.html";
    paths.useMinHtml = paths.webroot + "**/*.use.html";
    paths.indexHtml = paths.webroot + "index.html";

    // Bundle
    paths.concatJsDest = paths.webroot + "js/site.js";
    paths.concatCssDest = paths.webroot + "css/site.css";
    paths.bundleIndexHtml = paths.webroot + "index.bundle.html";

    // Lib
    paths.lib = paths.webroot + "lib/**/*.js";

    return paths;
}