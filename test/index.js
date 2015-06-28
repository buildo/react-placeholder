// called by mocha
const requireDir = require('require-dir');

require('babel/register')({
  ignore: /node_modules/,
  extensions: ['.js', '.jsx'],
  stage: 0,
  loose: true
});

requireDir('./tests', {
  recurse: true
});
