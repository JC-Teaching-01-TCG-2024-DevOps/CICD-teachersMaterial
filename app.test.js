const updateBackgroundColour = require('./src/app')

test('checks function exists', () => {
  expect(updateBackgroundColour).toBeDefined()
})

test('checks function excutes', () => {
  expect(updateBackgroundColour).toBeTruthy()
})

// test("checks function returns a colour", () => {
//   expect(updateBackgroundColour).toBeFalsy();
// });
