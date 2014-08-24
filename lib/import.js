var lib_ext = require('./ext');
var lib_read = require('./read');

module.exports = function(ext, contents, dirname, pathsImport, options) {
  lib_ext.allExt[ext].lastIndex = 0;
  var match = lib_ext.allExt[ext].exec(contents);
  return match ? { matchText: match[0], index: match.index, path: lib_read.readAlternativePath(dirname, match[(ext === 'html' || ext === 'any' ? 1 : 2 )], pathsImport, options), match: match} : undefined;
}
