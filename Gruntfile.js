/*
 * grunt-duplicate
 * https://github.com/h2non/grunt-duplicate
 *
 * Copyright (c) 2014 Tomas Aparicio
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },

    clean: {
      tests: ['.tmp']
    },

    duplicate: {
      basic: {
        options: {
          template: true,
          copies: 100,
          data: {
            say: 'hello'
          }
        },
        files: [{
          src: ['test/fixtures/*'],
          dest: '.tmp/'
        }]
      }
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    }

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('test', ['clean', 'jshint', 'duplicate', 'nodeunit']);

  grunt.registerTask('default', ['test']);

};
