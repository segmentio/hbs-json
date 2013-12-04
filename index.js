
/**
 * Expose `jsonHelper`.
 */

module.exports = jsonHelper;


/**
 * Stringify json.
 *
 * @param {Object} json
 * @return {String}
 */

function jsonHelper (json) {
  if (!json) return 'null';
  return JSON.stringify(json);
}