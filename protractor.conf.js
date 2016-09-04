exports.config = {
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['test/e2e/**/*.spec.js'],

  rootElement: '.weather-widget',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
