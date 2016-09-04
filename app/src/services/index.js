'use strict';

let app = require('angular').module('weatherApp');

app.factory('WeatherApi', require('./weather-api.service'));
app.service('PositionService', require('./position.service'));
app.service('WeatherService', require('./weather.service'));
