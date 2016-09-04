'use strict';

var WeatherPage = require('./pages/single-page');

describe('Weather app', () => {

  var weatherPage;

  beforeEach(() => {
    weatherPage = new WeatherPage();
    weatherPage.open();
    browser.ignoreSynchronization = true;
  });
});
