
const Player = require('./player.js');

// Function to damage player's health by 10
module.exports.testDamageHealthBy = function testDamageHealthBy() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew");
  player1.damageHealthBy(10);
  return player1.getHealth();
}

// Function to heal player's health by 10
module.exports.testHealHealthBy = function testHealHealthBy() {
  var player1 = new Player(0, 90, 0, null, null, "Andrew");
  player1.healHealthBy(10);
  return player1.getHealth();
}

// Function to take 10 health from players until their health is 0. player2
// will go one past 0 to test lower boundary
module.exports.testDamageToDeathByTen = function testDamageToDeathByTen() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew");
  var player2 = new Player(1, 100, 0, null, null, "Amjad");
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
  var player1 = new Player(0, 100, 0, null, null, "Andrew");
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

// Function to attemt to input garbage values into the damageHealthBy function
module.exports.testDamageByGarbage = function testDamageByGarbage() {
  var player1 = new Player(0, 100, 0, null, null, "Andrew");
  var garbage = [21.2, "Hello World", true, undefined, null, Symbol('foo')];
  for (i = 0; i < garbage.length; i++) {
    player1.damageHealthBy(garbage[i]);
  }
  return player1.getHealth();
}


// Funtion to add 10 health from players until their health is 100. player2
// will go one past 100 to test upper boundary
module.exports.testHealTo100ByTen = function testHealTo100ByTen() {
  var player1 = new Player(0, 10, 0, null, null, "Andrew");
  var player2 = new Player(1, 10, 0, null, null, "Amjad");

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
  var player1 = new Player(0, 0, 0, null, null, "Andrew");
  for (i = 0; i < 10; i++) {
    player1.healHealthBy(10);
  }

  return player1.getHealth();
}
