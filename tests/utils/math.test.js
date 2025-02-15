const { add, multiply } = require('src/utils/math');

describe('Math Utilities', () => {
  test.each([
    [1, 2, 3],
    [-1, -1, -2],
    [0, 0, 0],
    [Number.MAX_SAFE_INTEGER, 1, Number.MAX_SAFE_INTEGER + 1],
  ])('add(%i, %i) should return %i', (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });

  test('multiply should return the correct product', () => {
    expect(multiply(3, 5)).toBe(15);
  });

  test('multiply should handle large numbers without overflow', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });
});
