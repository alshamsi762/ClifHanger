
const Player = require('./player.js');
const Item = require('./item.js');

// Function to damage player's health by 10
module.exports.testDamageHealthBy = function testDamageHealthBy() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  player1.damageHealthBy(10);
  return player1.getHealth();
}

// Function to heal player's health by 10
module.exports.testHealHealthBy = function testHealHealthBy() {
  var player1 = new Player(0, 90, 0, null, null, "Andrew", 0);
  player1.healHealthBy(10);
  return player1.getHealth();
}

// Function to take 10 health from players until their health is 0. player2
// will go one past 0 to test lower boundary
module.exports.testDamageToDeathByTen = function testDamageToDeathByTen() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var player2 = new Player(1, 100, 0, null, null, "Amjad", 0);
  while(player1.getHealth() > 0) {
    player1.damageHealthBy(10);
  }

  for(i = 0; i < 11; i++) {
    player2.damageHealthBy(10);
  }

  return (player1.getHealth() == player2.getHealth());
}

// Function to take a random amount of health from a player until their health
// is 0, repeat 100 times.
module.exports.testRandomDamageToDeath = function testRandomDamageToDeath() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var healthlog = [];
  while(healthlog.length < 100) {
    while(player1.getHealth() > 0) {
      var damage = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
      player1.damageHealthBy(damage);
    }
    healthlog.push(player1.getHealth());
    player1.health = 100;
  }

  for (i = 0; i < healthlog.length; i++) {
    var x = healthlog.pop();
    if (x != 0) {
      console.log(x);
      return false;
    }
  }

  return true;
}

// Function to attempt to input garbage values into the damageHealthBy function
module.exports.testDamageByGarbage = function testDamageByGarbage() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var garbage = [21.2, "Hello World", true, undefined, null, Symbol('foo'), -5];
  for (i = 0; i < garbage.length; i++) {
    player1.damageHealthBy(garbage[i]);
  }
  return player1.getHealth();
}


// Funtion to add 10 health from players until their health is 100. player2
// will go one past 100 to test upper boundary
module.exports.testHealTo100ByTen = function testHealTo100ByTen() {
  var player1 = new Player(0, 10, 0, null, null, "Andrew", 0);
  var player2 = new Player(1, 10, 0, null, null, "Amjad", 0);

  while(player1.getHealth() < 100) {
    player1.healHealthBy(10);
  }

  for(i = 0; i < 12; i++) {
    player2.healHealthBy(10);
  }

  return (player1.getHealth() == player2.getHealth());
}

// Function to try to heal a player whose health is 0.
module.exports.testHealDeadPlayer = function testHealDeadPlayer() {
  var player1 = new Player(0, 0, 0, null, null, "Andrew", 0);
  for (i = 0; i < 10; i++) {
    player1.healHealthBy(10);
  }

  return player1.getHealth();
}

// Function to attempt to input garbage values into the healHealBy function
module.exports.testHealHealthByGarbage = function testHealHealthByGarbage() {
  var player1 = new Player(0, 50, 0, null, null, "Andrew", 0);
  var garbage = [21.2, "Hello World", true, undefined, null, Symbol('foo'), -5];
  for (i = 0; i < garbage.length; i++) {
    player1.healHealthBy(garbage[i]);
  }
  return player1.getHealth();
}

// Function to test pushing offensiveItem to player inventory
module.exports.testPushOffensiveItem = function testPushOffensiveItem() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var item = new Item("Whip", 0, 0, 2, 10, 0.90, "Whip players two spaces away from you");
  player1.pushOffensiveItem(item);
  return (player1.offensive.length == 1);
}

// Function to test popping an offensiveItem from player inventory
module.exports.testPopOffensiveItem = function testPopOffensiveItem() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var item = new Item("Whip", 0, 0, 2, 10, 0.90, "Whip players two spaces away from you");
  player1.pushOffensiveItem(item);
  var itemAgain = player1.popOffensiveItem();
  return (itemAgain instanceof Item && itemAgain === item);
}

// Function to test pushing more than max offensive inventory size
module.exports.testPushOffensiveItems = function testPushOffensiveItems() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var testItems = [];
  for (i = 0; i < 7; i++) {
    var item = new Item("item" + i, 0, 0, 2, 10, 0.90, "This is item" + i);
    testItems.push(item);
    player1.pushOffensiveItem(item);
  }
  for (i = 0; i < player1.offensive.length; i++) {
    if (testItems[i] !== player1.offensive[i]) {
      return false;
    }
  }

  return (testItems.length > player1.offensive.length)
}

// Function to test popping more items than there are in the offensive inventory
module.exports.testPopOffensiveItems = function testPopOffensiveItems() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var testItems = [];
  var testPopped = [];
  for (i = 0; i < 7; i++) {
    var item = new Item("item" + i, 0, 0, 2, 10, 0.90, "This is item" + i);
    testItems.push(item);
    player1.pushOffensiveItem(item);
  }

  for(i = 0; i < 7; i++) {
    var itemAgain = player1.popOffensiveItem();
    if (typeof itemAgain === undefined) {
      return false;
    }
  }

  return true;
}

// Function to test pushing garbage into offensive inventory
module.exports.testPushOffensiveGarbage = function testPushOffensiveGarbage() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var items = [21.2, "Hello World", true, undefined, null, Symbol('foo'), -5];
  for (i = 0; i < items.length; i++) {
    player1.pushOffensiveItem(items[i]);
  }
  return (player1.offensive == null);
}

// Function to test pushing defensive item to player inventory
module.exports.testPushDefensiveItem = function testPushDefensiveItem() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var item = new Item("Potion", 0, 0, 2, 10, 0.90, "Heal you up");
  player1.pushDefensiveItem(item);
  return (player1.defensive.length == 1);
}

// Function to test popping a defensive item from player inventory
module.exports.testPopDefensiveItem = function testPopDefensiveItem() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var item = new Item("Potion", 0, 0, 2, 10, 0.90, "Heal you up");
  player1.pushDefensiveItem(item);
  var itemAgain = player1.popDefensiveItem();
  return (itemAgain instanceof Item && itemAgain === item);
}

// Function to test pushing more than max defensive inventory size
module.exports.testPushDefensiveItems = function testPushDefensiveItems() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var testItems = [];
  for (i = 0; i < 7; i++) {
    var item = new Item("item" + i, 0, 0, 2, 10, 0.90, "This is item" + i);
    testItems.push(item);
    player1.pushDefensiveItem(item);
  }
  for (i = 0; i < player1.defensive.length; i++) {
    if (testItems[i] !== player1.defensive[i]) {
      return false;
    }
  }

  return (testItems.length > player1.defensive.length)
}

// Function to test popping more items than there are in the defensive inventory
module.exports.testPopDefensiveItems = function testPopDefensiveItems() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var testItems = [];
  var testPopped = [];
  for (i = 0; i < 7; i++) {
    var item = new Item("item" + i, 0, 0, 2, 10, 0.90, "This is item" + i);
    testItems.push(item);
    player1.pushDefensiveItem(item);
  }

  for(i = 0; i < 7; i++) {
    var itemAgain = player1.popDefensiveItem();
    if (typeof itemAgain === undefined) {
      return false;
    }
  }

  return true;
}

// Function to test pushing garbage into defensive inventory
module.exports.testPushDefensiveGarbage = function testPushDefensiveGarbage() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var items = [21.2, "Hello World", true, undefined, null, Symbol('foo'), -5];
  for (i = 0; i < items.length; i++) {
    player1.pushDefensiveItem(items[i]);
  }
  return (player1.defensive == null);
}
