'use strict';

module.exports = function ($scope, WeatherService) {
  let vm = this;

  WeatherService.get().then(function (data) {
    vm.weather = data;
  }, function (error) {
    vm.errorMessage = error;
  });
};
