/**
 * All reading related code here.
 */
var path = require('path');
var ngdoc = require('./ngdoc.js'),
    NEW_LINE = /\n\r?/,
    DEFAULT_EXAMPLES_DIR = 'examples';

module.exports = Reader;

function Reader(grunt) {
  var self = this;

  self.docs = [];
  self.process = process;

  function process(content, file, section, options) {
    if (file.match(/\.ngdoc$/)) {
      var header = '@section ' + section + '\n';
      self.docs.push(new ngdoc.Doc(header + content.toString(),file, 1, 1, options).parse());
    } else {
      processJsFile(content, file, section, options).forEach(function(doc) {
        self.docs.push(doc);
      });
    }
  }

  function processJsFile(content, file, section, options) {
    var docs = [];
    var lines = content.toString().split(NEW_LINE);
    var text;
    var startingLine ;
    var match;
    var inDoc = false;

    lines.forEach(function(line, lineNumber){
      lineNumber++;
      // is the comment starting?
      if (!inDoc && (match = line.match(/^\s*\/\*\*\s*(.*)$/))) {
        line = match[1];
        inDoc = true;
        text = [];
        startingLine = lineNumber;
      }

      // are we done?
      else if (inDoc && line.match(/\*\//)) {
        text = text.join('\n');
        text = text.replace(/^\n/, '');
        if (text.match(/@ngdoc/)){
          //console.log(file, startingLine)
          docs.push(new ngdoc.Doc('@section ' + section + '\n' + text, file, startingLine, lineNumber, options).parse());
        }
        doc = null;
        inDoc = false;
      }

      else if (inDoc && (match = line.match(/@external-example:(.+)/))) {
        if (match && match.length > 1) {
          handleExternalExample(line, match, text, options);
        }
      }

      // is the comment add text
      else if (inDoc){
        text.push(line.replace(/^\s*\*\s?/, ''));
      }
    });
    return docs;
  }

  function handleExternalExample(line, match, text, options) {
    var baseExampleDir = options.examplesDir || DEFAULT_EXAMPLES_DIR;

    var exampleName = match[1];
    var exampleDir = '';
    var exampleContent = '';

    var pattern = baseExampleDir + '/**/' + exampleName.replace(/\./g, '/');
    var exampleDirs = grunt.file.expand(pattern);

    if (exampleDirs && exampleDirs.length) {
      exampleDir = path.resolve(exampleDirs[0]);
    }

    if (exampleDir && grunt.file.exists(exampleDir) && grunt.file.isDir(exampleDir)) {
      grunt.file.recurse(exampleDir, function(fileAbsPath, rootDir, fileDir, fileName) {
        var fileContent = grunt.file.read(fileAbsPath);

        if (fileContent) {
          exampleContent += '\n\r<file name="' + fileName + '">\n\r';
          exampleContent += processExampleFile(fileContent, fileName);
          exampleContent += '\n\r</file>\n\r';
        }
      });
    }

    if (exampleContent) {
      exampleContent = '<example module="' + exampleName + '">' + exampleContent + '</example>';
      text.push(exampleContent);
    }
  }

  function processExampleFile(fileContent, fileName) {
    var proccessedContent = processBasicExample(fileContent);

    var fileExt = fileName.split(/\./).pop();

    if (fileExt === 'html') {
      proccessedContent = processHtmlExample(proccessedContent);
    }

    return proccessedContent;
  }

  function processBasicExample(fileContent) {
    var processedContent = '';

    var exampleLines = fileContent.toString().split(NEW_LINE);

    exampleLines.forEach(function(line) {
      processedContent += line + '\n\r';
    });

    return processedContent;
  }

  function processHtmlExample(fileContent) {
    var processedContent = '';
    var bodyFound = false;

    var exampleLines = fileContent.toString().split(NEW_LINE);

    exampleLines.forEach(function(line) {
      if (line.match(/^\s*<body.*>\s*$/)) {
        bodyFound = true;
      } else if (line.match(/^\s*<\/body>\s*$/)) {
        bodyFound = false;
      } else if (bodyFound && !line.match(/^.*<script.*$/)) {
        processedContent += line + '\n\r';
      }
    });

    return processedContent;
  }
}


