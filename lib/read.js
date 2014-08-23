
module.exports.readAlternativePath = function(paths, file) {
  paths = path.join(paths, file);
  if (fs.existsSync(paths)) {
    return paths;
  } else {
    for (var i = 0, _len = options.paths.length; i < _len; i++) {
        var pathAlternative = path.join(options.paths[i], file);
        if (fs.existsSync(pathAlternative)) {
            return pathAlternative;
        }
    }
    return paths;
  }
};

module.exports.readFile = function(_import) {
  return processFile(_import.path, String(fs.readFileSync(_import.path)));
};
