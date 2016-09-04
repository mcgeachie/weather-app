'use strict';

module.exports = function ($resource) {
  return $resource('/weather/:lat/:lon');
};
