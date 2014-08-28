var dynamic_api = require('../index');
var fs = require('fs');
var path = require('path');

var read = function(pathS) {
  fs.readFileSync(pathS, {encoding: 'UTF-8'});
};

describe("test basic", function(){
  var path_test_index = path.join(__dirname, 'test/index.js');
  var content = read(path_test_index);
  var content_generate = read(path.join(__dirname, 'test_generate/index.js'));

  it('import basic', function(){
    expect(dynamic_api(path_test_index, content)).toEqual(content_generate);
  });

  var path_test_index_repeated = path.join(__dirname, 'test/index_repeated.js');
  var content_repeated = read(path_test_index_repeated);
  var content_generate_repeated = read(path.join(__dirname, 'test_generate/index_repeated.js'));

  it('import repeated', function(){
    expect(dynamic_api(path_test_index_repeated, content_repeated, {ignoreRepeated: false})).toEqual(content_generate_repeated);
  });

  var content_generate_norepeated = read(path.join(__dirname, 'test_generate/index_norepeated.js'));

  it('import no repeated', function(){
    expect(dynamic_api(path_test_index_repeated, content_repeated)).toEqual(content_generate_norepeated);
  });

  var path_test_track = path.join(__dirname, 'test/index_track.js');
  var content_track = read(path_test_track);
  var content_generate_track = read(path.join(__dirname, 'test_generate/index_track.js'));

  it('track', function(){
    expect(dynamic_api(path_test_track, content_track, {track: true})).toEqual(content_generate_track);
  });
});
