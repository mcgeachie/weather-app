'use strict';

module.exports = function () {
  return {
    restrict: 'E',
    bindToController: true,
    controller: 'MainController',
    controllerAs: 'main',
    templateUrl: '/views/templates/weather-component.html'
  };
};
