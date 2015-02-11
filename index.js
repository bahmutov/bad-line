function badLine(frame) {

  var cute;
  try {
    cute = require('cute-stack');
  } catch (err) {
    // running as plugin
    cute = require('../../');
  }

  var exists = require('fs').existsSync;
  var read = require('fs').readFileSync;

  function getLine(filename, line) {
    var source = read(filename, 'utf-8').split('\n');
    return source[line - 1];
  }
  function isRelative(frame) {
    var startsWithDot = /^\./;
    return frame.file &&
      startsWithDot.test(frame.file) &&
      typeof frame.line === 'number' &&
      exists(frame.file);
  }
  if (isRelative(frame)) {
    var line = getLine(frame.file, frame.line);
    if (line) {
      frame.name = line.trim() + '\n  in ' + frame.id();
    }
    return cute.ui.default(frame);
  } else {
    return cute.ui.default(frame);
  }
}

module.exports = badLine;
