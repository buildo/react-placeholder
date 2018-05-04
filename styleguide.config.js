const path = require('path');

module.exports = {
  // build
  serverPort: 8080,
  styleguideDir: 'docs', // target of the `build` task

  require: [
    // "global" setup + sass imports
    path.resolve(__dirname, 'styleguide/setup.tsx')
  ],

  // content
  title: 'react-placeholder',
  // assetsDir: 'styleguide/assets',
  template: 'styleguide/index.html',
  propsParser: require('react-docgen-typescript').parse, // detect docs using TS information
  sections: [{
    name: 'ReactPlaceholder',
    components: () => [
      path.resolve(__dirname, 'src/ReactPlaceholder.tsx')
    ]
  }],
  showCode: true,
  showUsage: false, // show props by default
  getExampleFilename() {
    return path.resolve(__dirname, 'examples/Examples.md');
  }
};
