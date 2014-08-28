var defaults = require('defaults');
var lib_process = require('./lib/process')

var pathsImport = [];
var options = {
    paths: [],
    ignoreRepeated: true,
    track: false
}

module.exports = function(path, contents, opt) {
    options = defaults(opt, options);
    pathsImport = [];
    return lib_process(path, contents, pathsImport, options);
};
