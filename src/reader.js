/**
 * All reading related code here.
 */

exports.docs = [];
exports.process = process;

var ngdoc = require('./ngdoc.js'),
    NEW_LINE = /\n\r?/;

function extRegex(value){
    if(value instanceof RegExp){
        return value;
    } else if (typeof value === 'string') {
        return new RegExp(value);
    } else if (Array.isArray(value)) {
        value = value.map(function(ext) {
           return '(\\.' + ext + ')';
        }).reduce(function(prev, next){
            return prev + '|' + next;
        }) + '$';
        return new RegExp(value);
    }
}

function process(content, file, section, options) {
  var regex = extRegex(options.ext);
  if (regex.test(file)) {
    processJsFile(content, file, section, options).forEach(function(doc) {
      exports.docs.push(doc);
    });
  } else if (file.match(/\.ngdoc$/)) {
    var header = '@section ' + section + '\n';
    exports.docs.push(new ngdoc.Doc(header + content.toString(),file, 1, options).parse());
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
    if (inDoc && line.match(/\*\//)) {
      text = text.join('\n');
      text = text.replace(/^\n/, '');
      if (text.match(/@ngdoc/)){
        //console.log(file, startingLine)
        docs.push(new ngdoc.Doc('@section ' + section + '\n' + text, file, startingLine, options).parse());
      }
      doc = null;
      inDoc = false;
    }
    // is the comment add text
    if (inDoc){
      text.push(line.replace(/^\s*\*\s?/, ''));
    }
  });
  return docs;
}
