'use strict';

const assert = require('assert');
const json = require('./');

describe('hbs-json', () => {
  it('should return escaped json by default', () => {
    const output = json({ html: { text: '<a>alert(0);</a>', v: 5, meta: ['<a>alert(5);</a>', '<b>hello</b>']}});
    assert(output === '{"html":{"text":"&lt;a&gt;alert(0);&lt;/a&gt;","v":5,"meta":["&lt;a&gt;alert(5);&lt;/a&gt;","&lt;b&gt;hello&lt;/b&gt;"]}}');
  });

  it('should return non-escaped json', () => {
    const output = json({ html: { text: '<a>alert(0);</a>', v: 5, meta: ['<a>alert(5);</a>', '<b>hello</b>']}}, false);
    assert(output === '{"html":{"text":"<a>alert(0);</a>","v":5,"meta":["<a>alert(5);</a>","<b>hello</b>"]}}');
  });
});