var escape = require('escape-html');

var stringifyEscape = function(key, value) {
  return typeof value === 'string' ? escape(value) : value;
};

/**
 * Expose `jsonHelper`.
 */

module.exports = jsonHelper;


/**
 * Stringify json.
 *
 * @param {Object} json
 * @param {Boolean} escape Warning: Has nothing to do with handlebars double or triple brackets. Pass the arg.
 * @return {String}
 */

function jsonHelper (json, escape) {
  if (!json) return 'null';
  if (typeof escape !== 'boolean') escape = true; // last arg is normally an options object
  var escaper = escape ? stringifyEscape : undefined;
  return JSON.stringify(json, escaper);
}
