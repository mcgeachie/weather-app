'use strict';

const angular = require('angular');

require('angular-route');
require('angular-resource');
require('moment');
require('angular-moment');

let app = angular.module('weatherApp', ['angularMoment', 'ngResource', 'ngRoute']);

require('./services');
require('./components');
require('./controllers');

app.config(function ($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/single-page.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
