const Player = require('./player.js');
const Item = require('./item.js');
const Boardspace = require('./boardspace.js');

// Function to test Boardspace construction
module.exports.testCreateBS = function testCreateBS() {
  var bs = new Boardspace(0, null, null, null, Boardspace.STABLE);
  return (bs != null);
}

// Function to create two boardspaces, one containing a player, one without
module.exports.testBSOccupiers = function testBSOccupiers() {
  var bs1 = new Boardspace(0, null, null, null, Boardspace.STABLE);
  var player = new Player(1, 100, 0, null, null, "Andrew");
  var bs2 = new Boardspace(1, player, null, null, Boardspace.STABLE);

  return (bs1.hasPlayer() == false && bs2.hasPlayer() == true);
}

// Function to create two boardspaces, one containing a trap, one without
module.exports.testBSTraps = function testBSTraps() {
  var bs1 = new Boardspace(0, null, null, null, Boardspace.STABLE);
  var trap = new Item("Bear Trap", Item.OFFENSE, Item.BASIC, 0, 5, 0.95, "Bad");
  var bs2 = new Boardspace(1, null, trap, null, Boardspace.STABLE);

  return (bs1.hasTrap() == false && bs2.hasTrap() == true);
}

// Function to test setters
module.exports.testBSSetters = function testBSSetters() {
  var bs1 = new Boardspace(0, null, null, null, 0);
  var bs2 = new Boardspace(1, null, null, null, 0);
  var bs3 = new Boardspace(2, null, null, null, 0);

  var player1 = new Player(1, 100, 0, null, null, "Andrew");
  var player2 = new Player(1, 100, 0, null, null, "Amjad");
  var trap1 = new Item("BearTrap", Item.OFFENSE, Item.BASIC, 0, 5, 0.95, "Bad");
  var trap2 = new Item("BearTrap", Item.OFFENSE, Item.BASIC, 0, 5, 0.95, "Bad");
  var loot1 = new Item("Potion", Item.DEFENSE, Item.BASIC, 0, 10, 0.95, "Good");
  var loot2 = new Item("Potion", Item.DEFENSE, Item.BASIC, 0, 15, 0.95, "Good");

  return (bs1.setPlayer(player1) && !(bs1.setPlayer(player2)) &&
          bs2.setTrap(trap1) && !(bs2.setTrap(trap2)) && bs3.setLoot(loot1) &&
          !(bs3.setLoot(loot2)));
}

// Function to test garbage input to Setters
module.exports.testBSSetterGarbage = function testBSSetterGarbage() {
  var bs = new Boardspace(0, null, null, null, 0);
  var player = new Player(1, 100, 0, null, null, "Andrew");
  var trap = new Item("BearTrap", Item.OFFENSE, Item.BASIC, 0, 5, 0.95, "Bad");
  var loot = new Item("Potion", Item.DEFENSE, Item.BASIC, 0, 10, 0.95, "Good");
  var garbage = [21.2, "Hello World", true, undefined, null, Symbol('foo'), -5];

  bs.setPlayer(player);
  bs.setTrap(trap);
  bs.setLoot(loot);
  for (i = 0; i < garbage.length; i++) {
    bs.setPlayer(garbage[i]);
    bs.setTrap(garbage[i]);
    bs.setLoot(garbage[i]);
  }

  return (bs.player instanceof Player && bs.trap instanceof Item &&
          bs.loot instanceof Item);
}

// Function to test incrementing the fallStage
module.exports.testBSFallStage = function testBSFallStage() {
  var bs = new Boardspace(0, null, null, null, 0);
  for (i = 0; i < 100; i++) {
    bs.incrementFallStage();
  }
  return (bs.fallStage == 2);
}
