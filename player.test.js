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
