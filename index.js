'use strict';

const _ = require('lodash');

function encodeEntities(result, value, key) {
  if (!value) {
    result[key] = value;
    return;
  } else if (typeof value === 'string') {
    value = value.replace(/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, '');
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
