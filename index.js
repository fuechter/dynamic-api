var fs = require('fs');
var path = require('path');
var underscore = require('underscore');
var defaults = require('defaults');

var lib_ext = require('./lib/ext');
var lib_read = require('./lib/read');

var pathsImport = [];
var options = {
    paths: [],
    ignoreRepeated: true
}

var getImport = function(ext, contents, dirname) {
    lib_ext.allExt[ext].lastIndex = 0;
    var match = lib_ext[ext].exec(contents);
    return match ? { matchText: match[0], index: match.index, path: lib_read.readAlternativePath(dirname, match[(ext === 'html' || ext === 'any' ? 1 : 2 )]), match: match} : undefined;
};

var processMatch = function( _import, contents, hasAlready) {
    return contents.substring(0,_import.index) +
    (options.ignoreRepeated && hasAlready ? '' : lib_read.readFile(_import)) +
    contents.substring(_import.index+_import.matchText.length);
};

var processFile = function(p, contents) {
    var ext = lib_ext.getExt(p);
    var processed = contents, _import;
    while(_import = getImport(ext, processed, path.dirname(p))) {
        if (!underscore.contains(pathsImport, _import.path)) {
            pathsImport.push(_import.path);
            processed = processMatch(_import, processed);
        } else {
            processed = processMatch(_import, processed, true);
        }
    }
    return processed;
};

module.exports = function(path, contents, opt) {
    options = defaults(opt, options);
    pathsImport = [];
    return processFile(path, contents);
};
