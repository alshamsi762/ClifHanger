const testBS = require('./testboardspace.js');

// Create a boardspace, ensure it is not null
test('Create an empty board space not equal to null', () => {
  expect(testBS.testCreateBS()).toBe(true);
})

// Create two boardspaces, test if isOccupied recognizes a player on it
test('Create two boardspaces, one with, another without a player', () => {
  expect(testBS.testBSOccupiers()).toBe(true);
})

// Create two boardspaces, test if hasTrap recognizes a trap on it
test('Create two boardspaces, one with, another without a trap', () => {
  expect(testBS.testBSTraps()).toBe(true);
})

// Create three boardspaces. Test setters when space is empty and when it
// already has a item or player there
test('Setters (Player, Trap, and Loot) work', () => {
  expect(testBS.testBSSetters()).toBe(true);
})

// Test setters with garbage input
test('Test setters with garbage input', () => {
  expect(testBS.testBSSetterGarbage()).toBe(true);
})

// Test incrementing fall stage for a board space
test('Test incrementing the fallStage. Should not surpass 2', () => {
  expect(testBS.testBSFallStage()).toBe(true);
})
