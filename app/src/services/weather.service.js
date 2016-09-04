'use strict';

module.exports = function ($q, PositionService, WeatherApi) {

  this.get = function () {
    let deferred = $q.defer();

    PositionService.get().then(function (position) {
      WeatherApi.get({
        lat: position.latitude,
        lon: position.longitude
      }).$promise.then(function (data) {
        deferred.resolve(data);
      }, function (error) {
        deferred.reject(error.statusText);
      });
    }, function () {
      deferred.reject('Unable to obtain position');
    });

    return deferred.promise;
  };
};
