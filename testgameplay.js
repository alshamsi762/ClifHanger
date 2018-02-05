const Gameplay = require('./gameplay.js');
const Player = require('./player.js');

module.exports.testGameplayObject = function testGameplayObject() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);

  var gameplay = new Gameplay(p1, p2, p3, p4);

  var players = [p1, p2, p3, p4];

  var playerTests = [];
  var temp = gameplay.playerList;
  while(temp.next != undefined && temp.next.id != -1) {
    playerTests.push(temp);
    temp = temp.next;
  }

  for (i = 0; i < playerTests.length; i++) {
    if (playerTests[i] !== players[i]) {
      return false;
    }
  }
  return true;




}
