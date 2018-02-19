/*global module:false*/
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    changelog: { options: { dest: 'CHANGELOG.md' } },
    jasmine_node: {
      forceexit: true,
      captureExceptions: true
    },
    watch: {
      parser: {
        files: ['src/*.js', 'spec/*Spec.js'],
        tasks: ['jasmine_node']
      }
    },
    conventionalChangelog: {
      options: {
        changelogOpts: {
          preset: 'angular'
        }
      },
      release: {
        src: 'CHANGELOG.md'
      }
    },
    conventionalGithubReleaser: {
      release: {
        options: {
          auth: {
            type: 'oauth',
            token: process.env.GH_TOKEN
          },
          changelogOpts: {
            preset: 'angular'
          }
        }
      }
    }
  });

  grunt.registerTask('test', 'Run tests for parser code', ['jasmine_node']);

};
