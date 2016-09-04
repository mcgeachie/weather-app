'use strict';

var WeatherPage = function() {

  var driver = browser.driver;

  this.city = element(by.css('.current-item'));

  this.open = function() {
    browser.get('http://127.0.0.1:8080/#/');
  };
};

module.exports = WeatherPage;
