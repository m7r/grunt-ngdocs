/*global module:false*/
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-conventional-changelog');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    changelog: { options: { dest: 'CHANGELOG.md' } }
  });

};
