/**
 * Created by JounQin on 16/4/18.
 */
'use strict';

var HTMLPostCSS = require('html-postcss'),
    es = require('event-stream'),
    _ = require('lodash');

module.exports = function (options) {
    if (_.isUndefined(options)) {
        options = {};
    } else if (_.isArray(options)) {
        options = {plugins: options};
    }

    return es.map(function (file, done) {
        var htmlString = file.contents.toString();

        var prefixed = new HTMLPostCSS(options.plugins).process(htmlString, options.cheerio, options.postcss);
        file.contents = new Buffer(prefixed);

        next();

        function next(err) {
            done(err, file);
        }
    });
};