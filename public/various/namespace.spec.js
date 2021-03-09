'use strict';

const namespace = require('./namespace');

describe('namespace', () => {
  it('should just work', () => {
    const firstPath = 'a.b.c.d.e';
    const firstValue = 100;
    const firstResult = { a: { b: { c: { d: { e: 100 } } } } };

    expect(namespace(firstPath, firstValue)).toEqual(firstResult);
  });
});
