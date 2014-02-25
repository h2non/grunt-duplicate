'use strict';

var grunt = require('grunt');

exports.duplicate = {
  random: function (test) {
    test.expect(1);

    var actual = grunt.file.read('.tmp/test-15');
    var expected = grunt.file.read('test/expected/test-15');
    test.equal(actual, expected, 'should have the same data');

    test.done();
  },
  end: function (test) {
    test.expect(1);

    var actual = grunt.file.read('.tmp/test-100');
    var expected = grunt.file.read('test/expected/test-100');
    test.equal(actual, expected, 'should have the same data');

    test.done();
  }
};


