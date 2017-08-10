/* eslint-env node */
'use strict';

module.exports = {
  name: 'mickey-addon',
   contentFor(type, config) {
    if (type === 'environment') {
      return '<h1>' + config.environment + '</h1>';
    }
  }
};
