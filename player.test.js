const testplayer = require('./testplayer.js')

// Take a player with 100 health and damage their health by 10
test('Subtract 10 from player health to equal 90', () => {
  expect(testplayer.testDamageHealthBy()).toBe(90);
})

// Take a player with 90 health and heal their health by 10
test('Add 10 to player health to equal 100', () => {
  expect(testplayer.testHealHealthBy()).toBe(100);
})

// Take two players, damage their health by 10 until they are dead. Also, test
// lower boundary on damaging
test('Damage players by 10 until their healths equal 0', () => {
  expect(testplayer.testDamageToDeathByTen()).toBe(true);
})

// Take a player and damage their health by a random number between
// 1 & 100 (inc.) until their health reaches 0. Repeat 5 times and compare
// results to be equal
test('Damage player by random number until their health equals 0', () => {
  expect(testplayer.testRandomDamageToDeath()).toBe(true);
})

// Take a player and attempt damage their health with garbage input
test('Damage a player with garbage input does nothing', () => {
  expect(testplayer.testDamageByGarbage()).toBe(100);
})

// Take two players, heal their health by 10 until they are at 100 health. Also,
// test upper boundary on healing
test('Heal players by 10 until their healths equal 100', () => {
  expect(testplayer.testHealTo100ByTen()).toBe(true);
})

// Take a player whose health is 0 and attempt to heal them to full health
test('Healing a dead player will not change their health', () => {
  expect(testplayer.testHealDeadPlayer()).toBe(0);
})

// Take a player and attempt to heal them with garbage input
test('Heal a player with garbage input does nothing', () => {
  expect(testplayer.testHealHealthByGarbage()).toBe(50);
})

// Take a player and add an offensive item to their inventory
test('Add an offensive item to the player inventory', () => {
  expect(testplayer.testPushOffensiveItem()).toBe(true);
})

// Take a player and attempt to add more than 6 items to the offensive item list
test('Limit the amount of items that can be in the offensive inventory', () => {
  expect(testplayer.testPushOffensiveItems()).toBe(true);
})

// Take a player and attempt to add garbage values to the offensive inventory
test('Push to offensive inventory with garbage input does nothing', () => {
  expect(testplayer.testPushOffensiveGarbage()).toBe(true);
})

// Take a player with an offensive item in their inventory and attempt to pop
// the item off the stack
test('Pop an offensive item from the player inventory', () => {
  expect(testplayer.testPopOffensiveItem()).toBe(true);
})

// Take a player with full offensive inventory and attempt to pop all items plus
// one more
test('Popping all items from offensive inventory. Excessive calls return null', () => {
  expect(testplayer.testPopOffensiveItems()).toBe(true);
})

// Take a player and add an defensive item to their inventory
test('Add a defensive item to the player inventory', () => {
  expect(testplayer.testPushDefensiveItem()).toBe(true);
})

// Take a player and attempt to add more than 6 items to the defensive item list
test('Limit the amount of items that can be in the offensive inventory', () => {
  expect(testplayer.testPushDefensiveItems()).toBe(true);
})

// Take a player and attempt to add garbage values to the defensive inventory
test('Push to defensive inventory with garbage input does nothing', () => {
  expect(testplayer.testPushDefensiveGarbage()).toBe(true);
})

// Take a player with an defensive item in their inventory and attempt to pop
// the item off the stack
test('Pop an defensive item from the player inventory', () => {
  expect(testplayer.testPopDefensiveItem()).toBe(true);
})

// Take a player with full defensive inventory and attempt to pop all items plus
// one more
test('Popping all items from defensive inventory. Excessive calls return null', () => {
  expect(testplayer.testPopDefensiveItems()).toBe(true);
})
