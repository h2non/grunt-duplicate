'use strict';

module.exports = function(grunt) {

  var path = require('path')
  var _ = require('lodash')

  grunt.registerMultiTask('duplicate', 'Duplicate files with templating support', function () {
    
    var options = this.options({
      copies: 1,
      template: true,
      data: null
    })

    this.files.forEach(function (f) {
      var src = f.src.filter(function (filepath) {
        return grunt.file.exists(filepath)
      }).forEach(function (filepath) {
        var copies = options.copies + 1
        for (var id = 1; id < copies; id += 1) {
          processFile(filepath, id, f)
        }
      })
    })

    function processFile(filepath, id, file) {
      var locals = { data: { id: id }}
      var data = grunt.file.read(filepath)
      var dest = setFileName(file.dest, filepath, id)
      
      if (options.template) {
        if (_.isPlainObject(options.data)) {
          _.extend(locals.data, options.data)
        }
        data = grunt.template.process(data, locals)
      }
      
      grunt.file.write(dest, data)
      grunt.verbose.writeln('File "' + dest + '" created')
    }

    function setFileName(dest, filepath, id) {
      if (dest) {
        filepath = path.join(dest, path.basename(filepath, path.extname(filepath)))
      }
      return filepath + '-' + id + path.extname(filepath)
    }

  })
}
