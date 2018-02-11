const testgameplay = require('./testgameplay.js');

// Test 1
test('Creating gameplay object and player linked list', () => {
  expect(testgameplay.testGameplayObject()).toBe(true);
})

// Test 2
test('Kill players at different locations in linked list works', () => {
  expect(testgameplay.testKillingPlayer()).toBe(true);
})

// Test 3
test('Create board and see if players are at the spawn locations and 10 random loots have been dropped', () => {
  expect(testgameplay.testCreateBoard()).toBe(true);
})

// Test 4
test('Moving to valid blocks and checking to see if it will move to an occupied block', () => {    // Still need to do tests for picking up items once we have a list of items
  expect(testgameplay.testMoving()).toBe(true);
})

// Test 5
test('Dropping 50 additional random items, in different blocks(not occupied by players or other loot or have FALLEN)', () => {
  expect(testgameplay.testDropItem()).toBe(true);
})

// Test 6
test('Calculate possibleAttacksBy using traps, regular and ranged basic and radius attacks from position 45', () => {
  expect(testgameplay.testPossibleAttacksBy()).toBe(true);
})

// Test 7
test('Calculate possibleAttacksBy Basic Attack when player is located at or near boundaries', () => {
  expect(testgameplay.testBoundsPossibleAttacksByBasic()).toBe(true);
})

// Test 8
test('Calculate possibleAttacksBy Radius Attack when player is located at or near boundaries', () => {
  expect(testgameplay.testBoundsPossibleAttacksByRadius()).toBe(true);
})

// Test 9
test('Calculate possibleAttacksBy Ranged Basic Attack when player is located at or near boundaries', () => {
  expect(testgameplay.testBoundsPossibleAttacksByRangedBasic()).toBe(true);
})

// Test 10
test('Calculate possibleAttacksBy Ranged Radius Attack when player is located at or near boundaries', () => {
  expect(testgameplay.testBoundsPossibleAttacksByRangedRadius()).toBe(true);
})

// Test 11
test('Calculate possible moves from a position', () => {
  expect(testgameplay.testPossibleMovesFrom()).toBe(true);
})

// Test 12
test('Test board shrinking preconditions and shrinking process. Killing players if found too', () => {
  expect(testgameplay.testShrinking()).toBe(true);
})

// Test 13
test('Test start and end turn', () => {
  expect(testgameplay.testTurn()).toBe(true);
})

// Test 14
test('Test Attack', () => {
  expect(testgameplay.testAttack()).toBe(true);
})

// Test 15
test('Test possibleAttacks after shrinking board', () => {
  expect(testgameplay.testPossibleAttacksAfterBoardShrink()).toBe(true);
})
