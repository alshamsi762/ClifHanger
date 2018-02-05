const testgameplay = require('./testgameplay.js');

test('Creating gameplay object and player linked list', () => {
  expect(testgameplay.testGameplayObject()).toBe(true);
})

test('Kill players at different locations in linked list works', () => {
  expect(testgameplay.testKillingPlayer()).toBe(true);
})

test('Create board and see if players are at the spawn locations', () => {
  expect(testgameplay.testCreateBoard()).toBe(true);
})
