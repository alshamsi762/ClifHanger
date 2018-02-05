const Gameplay = require('./gameplay.js');
const Player = require('./player.js');


// Function to test creating the boardspace object and the player doubleList
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

// Function to test killing a player and removing them from the linked list
module.exports.testKillingPlayer = function testKillingPlayer() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);

  var gameplay1 = new Gameplay(p1, p2, p3, p4);
  var gameplay2 = new Gameplay(p1, p2, p3, p4);
  var gameplay3 = new Gameplay(p1, p2, p3, p4);
  var gameplay4 = new Gameplay(p1, p2, p3, p4);

  var killP1List = [p2, p3, p4];
  var killP2List = [p1, p3, p4];
  var killP3List = [p1, p2, p4];
  var killP4List = [p1, p2, p3];

  var killP1Test = [];
  var killP2Test = [];
  var killP3Test = [];
  var killP4Test = [];

  gameplay1.killPlayer(p1);
  gameplay2.killPlayer(p2);
  gameplay3.killPlayer(p3);
  gameplay4.killPlayer(p4);

  var temp1 = gameplay1.playerList;
  var temp2 = gameplay2.playerList;
  var temp3 = gameplay3.playerList;
  var temp4 = gameplay4.playerList;

  while(temp1.next != undefined && temp2.next != undefined &&
        temp3.next != undefined && temp4.next != undefined &&
        temp1.next.id != -1 && temp2.next.id != -1 &&
        temp3.next.id != -1 && temp4.next.id != -1) {

        killP1Test.push(temp1);
        killP2Test.push(temp2);
        killP3Test.push(temp3);
        killP4Test.push(temp4);

        temp1 = temp1.next;
        temp2 = temp2.next;
        temp3 = temp3.next;
        temp4 = temp4.next;
  }

  for (i = 0; i < killP1Test.length; i++) {
    if (killP1List[i] !== killP1Test[i] || killP2List[i] !== killP2Test[i] ||
        killP3List[i] !== killP4Test[i] || killP4List[i] !== killP4Test[i]) {
      return false;
    }
  }
  return true;
}

// TODO Test killing sentinel
