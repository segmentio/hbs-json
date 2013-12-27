var escape = require('escape-html');
var traverse = require('traverse');

/**
 * Expose `jsonHelper`.
 */

module.exports = jsonHelper;


/**
 * Stringify json.
 *
 * @param {Object} json
 * @param {Boolean} escape
 * @return {String}
 */

function jsonHelper (json, escape) {
  if (!json) return 'null';
  if (escape === undefined) escape = true;
  if (escape) json = escapeHtml(json);
  return JSON.stringify(json);
}


/**
 * Recursively escape any HTML found in nested objects
 *
 * @param {Object} obj
 * @return {Object}
 */

function escapeHtml (obj) {
  return traverse(obj).forEach(function (val) {
    if (typeof val === 'string') this.update(escape(val));
  });
}