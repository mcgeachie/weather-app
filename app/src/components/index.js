'use strict';

const app = require('angular').module('weatherApp');

app.directive('weatherWidget', require('./weather.component'));
