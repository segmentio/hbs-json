'use strict';

const _ = require('lodash');

function encodeEntities(result, value, key) {
  if (!value) {
    result[key] = value;
    return;
  } else if (typeof value === 'string') {
    result[key] = _.escape(value);
    return;
  } else if (typeof value === 'object') {
    result[key] = _.transform(value, encodeEntities);
    return;
  }

  result[key] = value;
}

function jsonHelper(json, escape) {
  if (!json) return 'null';
  if (escape === undefined) escape = true;
  if (escape) json = _.transform(json, encodeEntities);
  return JSON.stringify(json);
}

module.exports = jsonHelper;
