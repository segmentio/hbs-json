var assert = require('assert');
var json = require('./');


describe('hbs-json', function () {
  it('should return escaped json by default', function () {
    var output = json({ html: { text: '<a>alert(0);</a>', v: 5}});
    assert(output === '{"html":{"text":"&lt;a&gt;alert(0);&lt;/a&gt;","v":5}}');
  });

  it('should return non-escaped json', function () {
    var output = json({ html: { text: '<a>alert(0);</a>', v: 5}}, false);
    assert(output === '{"html":{"text":"<a>alert(0);</a>","v":5}}');
  });
});