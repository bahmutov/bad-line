gt.module('bad-line');

gt.async('error', function () {
  var demo = require('path').join(__dirname, 'demo.js');
  gt.exec('node', [demo], 1, 'expected the process to fail');
});
