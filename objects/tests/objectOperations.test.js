// Import the object functions from objectOperations.js using `require`
const { getProperty, updateProperty, deleteProperty } = require('./objectOperations');

// Test for getting a property value
test('gets the "name" property value from { name: "Luke Skywalker", age: 19 }', () => {
  const character = { name: "Luke Skywalker", age: 19, occupation: "Jedi" };
  expect(getProperty(character, "name")).toBe("Luke Skywalker");
});

// Test for updating a property value
test('updates the "age" property to 20 in { name: "Luke Skywalker", age: 19 }', () => {
  const character = { name: "Luke Skywalker", age: 19, occupation: "Jedi" };
  expect(updateProperty(character, "age", 20)).toEqual({ name: "Luke Skywalker", age: 20, occupation: "Jedi" });
});

// Test that updateProperty does not alter other properties
test('updates the "age" property but keeps "name" unchanged', () => {
  const character = { name: "Luke Skywalker", age: 19, occupation: "Jedi" };
  updateProperty(character, "age", 20);
  expect(character.name).toBe("Luke Skywalker");
});

// Test for deleting a property
test('removes the "occupation" property from { name: "Luke Skywalker", occupation: "Jedi" }', () => {
  const character = { name: "Luke Skywalker", occupation: "Jedi", age: 19 };
  expect(deleteProperty(character, "occupation")).toEqual({ name: "Luke Skywalker", age: 19 });
});

// Test that getProperty returns `undefined` for non-existent keys
test('returns "undefined" when accessing non-existent "planet" property from { name: "Luke Skywalker" }', () => {
  const character = { name: "Luke Skywalker", age: 19, occupation: "Jedi" };
  expect(getProperty(character, "planet")).toBeUndefined();
});
