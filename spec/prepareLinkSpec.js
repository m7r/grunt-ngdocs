describe('prepareLinks', function() {
  var grunt = require('grunt');
  var prepareLinks = require('../tasks/grunt-ngdocs.js')(grunt).prepareLinks;

  it('should handel github https url', function() {
    var pkg = {repository: {url: 'https://github.com/owner/name'}};
    var opts = {sourceEdit:true, editLink: true};
    prepareLinks(pkg, opts);
    expect(opts.editLink('test.js')).toEqual('https://github.com/owner/name/edit/master/test.js');
  });

  it('should handel github https url with .git suffix', function() {
    var pkg = {repository: {url: 'https://github.com/owner/name.git'}};
    var opts = {sourceEdit:true, editLink: true};
    prepareLinks(pkg, opts);
    expect(opts.editLink('test.js')).toEqual('https://github.com/owner/name/edit/master/test.js');
  });

  it('should handel github https url with .git and path suffix', function() {
    var pkg = {repository: {url: 'https://github.com/owner/name.git/#123456/'}};
    var opts = {sourceEdit:true, editLink: true};
    prepareLinks(pkg, opts);
    expect(opts.editLink('test.js')).toEqual('https://github.com/owner/name/edit/master/test.js');
  });

  it('should handel git@github url', function() {
    var pkg = {repository: {url: 'git@github.com:owner/name'}};
    var opts = {sourceEdit:true, editLink: true};
    prepareLinks(pkg, opts);
    expect(opts.editLink('test.js')).toEqual('https://github.com/owner/name/edit/master/test.js');
  });

  it('should handel git@github url with .git suffix', function() {
    var pkg = {repository: {url: 'git@github.com:owner/name.git'}};
    var opts = {sourceEdit:true, editLink: true};
    prepareLinks(pkg, opts);
    expect(opts.editLink('test.js')).toEqual('https://github.com/owner/name/edit/master/test.js');
  });
});
