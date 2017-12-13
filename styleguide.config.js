const path = require('path');

module.exports = {
  // build
  serverPort: 8080,
  styleguideDir: 'docs', // target of the `build` task

  require: [
    // "global" setup + sass imports
    path.resolve(__dirname, 'styleguide/setup.js')
  ],

  // content
  title: 'react-placeholder',
  // assetsDir: 'styleguide/assets',
  template: 'styleguide/index.html',
  sections: [{
    name: 'ReactPlaceholder',
    components: () => [
      path.resolve(__dirname, 'src/ReactPlaceholder.js')
    ]
  }],
  showCode: true,
  showUsage: false, // show props by default
  getExampleFilename() {
    return path.resolve(__dirname, 'examples/Examples.md');
  }
};
