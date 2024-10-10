const { findMin, findMax, elementExists, arrayLength } = require('../src/arrayOperations');

test('find the min of [3,1,4,2] to be 1', () => {
  expect(findMin([3, 1, 4, 2])).toBe(1);
});

test('find the min of [3,1,4,2] to not be 3', () => {
  expect(findMin([3, 1, 4, 2])).not.toBe(3);
});

test('find the max of [3,1,4,2] to be 4', () => {
  expect(findMax([3, 1, 4, 2])).toBe(4);
});

test('find the max of [3,1,4,2] to not be 5', () => {
  expect(findMax([3, 1, 4, 2])).not.toBe(5);
});

test('elementExists for 2 in [3,1,4,2] to be true', () => {
  expect(elementExists([3, 1, 4, 2], 2)).toBe(true);
});

test('the length of the array will be 4', () => {
  expect(arrayLength([3, 1, 4, 2])).toBe(4);
});

test('Array comparison [1,2,3] to equal [1,2,3]', () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});
