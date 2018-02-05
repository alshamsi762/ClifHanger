const testgameplay = require('./testgameplay.js');

test('Creating gameplay object and player linked list', () => {
  expect(testgameplay.testGameplayObject()).toBe(true);
})
