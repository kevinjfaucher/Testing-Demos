// Import the math functions using `require`
const { add, multiply, divide } = require('./math');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides 6 / 3 to equal 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('throws error when dividing by zero', () => {
  expect(divide(6, 0)).toThrow('Cannot divide by zero');
});
