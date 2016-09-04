'use strict';

module.exports = function ($q, $window) {

  this.get = function () {
    let deferred = $q.defer();

    if (!$window.navigator.geolocation) {
      deferred.resolve({
        latitude: 51.5257,
        longitude: 0.0875
      });
    } else {
      $window.navigator.geolocation.getCurrentPosition(function (position) {
        deferred.resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, function (err) {
        deferred.reject(err);
      });
    }

    return deferred.promise;
  };
};
