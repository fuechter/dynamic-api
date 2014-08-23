var path = require('path');

module.exports.allExt = {
  html: /[<][!][-]{2}.?import[(]?.?["'](.*)["'].?[)]?.?[-]{2}[>]/g,
  js: /([\/]{2}|[\/][*]).?import.?[(]?.?["'](.*)["'].?[)]?[;]?.*?(\n[*][\/])?/g,
  css: /([\/]{2}|[\/][*]).?import[(]?.?["'](.*)["'].?[)]?([*][\/])?/g,
  yaml: /([ \t]*)[-][ ]?import[:][ ]*["'](.*)["']/g,
  yml: /([ \t]*)[-][ ]?import[:][ ]*["'](.*)["']/g,
  json: /([ \t]*)[-][ ]?import[:][ ]*["'](.*)["']/g,
  any: /[!].?import[(]?.?["'](.*)["'].?[)]/g
};

module.exports.getExt = function(p) {
  var ext = path.extname(p).substr(1).toLowerCase();
  return !this.allExt.hasOwnProperty(ext) ? 'any' : ext;
};
