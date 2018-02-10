const Gameplay = require('./gameplay.js');
const Player = require('./player.js');
const Boardspace = require('./boardspace.js');
const Item = require('./item.js');


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

  gameplay1.createBoard();
  gameplay2.createBoard();
  gameplay3.createBoard();
  gameplay4.createBoard();

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

// Function to test creating gameboard
module.exports.testCreateBoard = function testCreateBoard() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);

  var gameplay = new Gameplay(p1, p2, p3, p4);

  gameplay.createBoard();

  // if (gameplay.board != undefined) {
  //   for (i = 0; i < 100; i++) {
  //     if (!(gameplay.board[i] instanceof Boardspace)) { return false; }
  //     if (i == 0 || i == 9 || i == 90 || i == 99) {
  //       if (!(gameplay.board[i].player instanceof Player)) { return false; }
  //     }
  //   }
  // }
  for(i = 0; i < 100; i++)
  {
    if(gameplay.board[i] == null)
    {
      return false;
    }
  }

  if(!gameplay.board[0].hasPlayer() || !gameplay.board[9].hasPlayer() || !gameplay.board[90].hasPlayer() || !gameplay.board[99].hasPlayer())
  {
    return false;
  }

  var found = 0;

  for(i = 0; i < 100; i++)
  {
    if(gameplay.board[i].hasLoot())
    {
      found++;
    }
    if(gameplay.board[i].fallStage != 0)
    {
      return false;
    }
  }

  if(found != 10)
  {
    return false;
  }

  return true;
}


// Function to test moving
module.exports.testMoving = function testMoving() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);

  var gameplay = new Gameplay(p1, p2, p3, p4);
  gameplay.createBoard();

  gameplay.currPlayer = p1;
  if(gameplay.currPlayer.name != "Andrew")
  {
    return false;
  }

  // p1 keeps moving right until he reaches p2
  while(gameplay.canMoveTo(gameplay.board[gameplay.currPlayer.position + 1]))
  {
    gameplay.moveTo(gameplay.board[gameplay.currPlayer.position + 1]);
  }


  if(gameplay.currPlayer.position != 8 || gameplay.board[0].hasPlayer() || !gameplay.board[8].hasPlayer())
  {
    return false;
  }

  if(gameplay.canMoveTo(gameplay.board[gameplay.currPlayer.position + 1]))
  {
    return false;
  }

  // Testing for picking up loot
  var item1 = new Item("Radius", 0, 1, 1, 20, null, null);
  gameplay.board[18].setLoot(item1);
  if(!gameplay.board[18].hasLoot() || gameplay.currPlayer.offensive != null)
  {
    return false;
  }

  // move up to block with offensive item
  gameplay.moveTo(gameplay.board[gameplay.currPlayer.position + 10]);
  if(gameplay.board[18].hasLoot() || gameplay.currPlayer.offensive[0].name != "Radius" || gameplay.currPlayer.offensive.length != 1)
  {
    return false;
  }
  // Pick up another offensive item
  var item2 = new Item("Fire", 0, 1, 1, 20, null, null);
  gameplay.board[28].setLoot(item2);
  gameplay.moveTo(gameplay.board[gameplay.currPlayer.position + 10]);
  if(gameplay.board[28].hasLoot() || gameplay.currPlayer.offensive[1].name != "Fire" || gameplay.currPlayer.offensive.length != 2)
  {
    return false;
  }
  // Im guessing defensive works the exact same way so I wont test it

  return true;
}


module.exports.testDropItem = function testDropItem() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);

  var gameplay = new Gameplay(p1, p2, p3, p4);
  gameplay.createBoard();

  var found = 0;

  for(k = 0; k < 50; k++)
  {
    gameplay.dropItem();
  }
  for(i = 0; i < 100; i++)
  {
    if(gameplay.board[i].hasLoot())
    {
      found++;
    }
  }
  if(gameplay.board[0].hasLoot() || gameplay.board[9].hasLoot() || gameplay.board[90].hasLoot() || gameplay.board[99].hasLoot())
  {
    return false;
  }
  return found == 60; // 10 for initialDrop and 50 more for testing
}

module.exports.testPossibleAttacksBy = function testPossibleAttacksBy() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);

  var gameplay = new Gameplay(p1, p2, p3, p4);
  gameplay.createBoard();
  gameplay.startTurnFor(p1);
  gameplay.moveTo(gameplay.board[45]);

  // Trap Item
  var trap = new Item("Trap", 0, 1, -1, 10, 0.60, "Traps a player and ends their turn");
  // Basic Attack
  var basic = new Item("Basic", 0, 0, 1, 10, 1.00, "The most basic attack");
  // Radius Attack
  var radius = new Item("Radius", 0, 1, 1, 10, 0,60, "Able to hit players around you");
  // Ranged Basic Attack
  var rangedBasic = new Item("Ranged Basic", 0, 0, 2, 10, 0.60, "A basic attack with more range");
  // Ranged Radius Attack
  var rangedRadius = new Item("Ranged Radius", 0, 1, 2, 10, 0.60, "A radius attack with more range");

  var expectedTrapResult = [];
  for (i = 0; i < 100; i++) { if (i != 45 && i != 9 && i != 90 && i != 99) { expectedTrapResult.push(i); } }

  // Expected result from basic attack
  var expectedBasicResult = [    35,
                              44,   46,
                                 55];
  // Expected result from radius attack
  var expectedRadiusResult = [34, 35, 36,
                              44,     46,
                              54, 55, 56];
  // Expected result from ranged basic attack
  var expectedRangedBasicResult = [   25,
                                      35,
                               43, 44,   46, 47,
                                      55,
                                      65];
  // Expected result from ranged radius attack
  var expectedRangedRadiusResult = [23, 24, 25, 26, 27,
                                    33, 34, 35, 36, 37,
                                    43, 44,     46, 47,
                                    53, 54, 55, 56, 57,
                                    63, 64, 65, 66, 67];

  var trapResult = gameplay.possibleAttacksBy(trap);
  var basicResult = gameplay.possibleAttacksBy(basic);
  var radiusResult = gameplay.possibleAttacksBy(radius);
  var rangedBasicResult = gameplay.possibleAttacksBy(rangedBasic);
  var rangedRadiusResult = gameplay.possibleAttacksBy(rangedRadius);

  var expecteds = [expectedTrapResult, expectedBasicResult, expectedRadiusResult,
  expectedRangedBasicResult, expectedRangedRadiusResult];
  var results = [trapResult, basicResult, radiusResult, rangedBasicResult, rangedRadiusResult];
  var titles = ["Trap", "Basic", "Radius", "RangedBasic", "RangedRadius"];

  for (i = 0; i < expecteds.length; i++) {
    if (expecteds[i].length != results[i].length) {
      console.log("expected" + titles[i] + "Result: \n");
      console.log(expecteds[i]);
      console.log(titles[i] + "Result: \n");
      console.log(results[i]);
      return false;
    }
    for (j = 0; j < expecteds[i].length; j++) {
      if (expecteds[i][j] != results[i][j]) {
        console.log("expected" + titles[i] + "Result: \n");
        console.log(expecteds[i]);
        console.log(titles[i] + "Result: \n");
        console.log(results[i]);
        return false;
      }
    }
  }
  return true;
}

module.exports.testBoundsPossibleAttacksByBasic = function testBoundsPossibleAttacksByBasic() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);
  // Basic Attack
  var basic = new Item("Basic", 0, 0, 1, 10, 1.00, "The most basic attack");
  var gameplay = new Gameplay(p1, p2, p3, p4);
  gameplay.createBoard();
  gameplay.startTurnFor(p1);

  var expectedResults = [
    [1, 10], [8, 19], [80, 91], [89, 98], [1, 10, 12, 21], [8, 17, 19, 28],
    [71, 80, 82, 91], [78, 87, 89, 98], [4, 6, 15], [30, 41, 50], [39, 48, 59],
    [85, 94, 96], [5, 14, 16, 25], [31, 40, 42, 51], [38, 47, 49, 58], [75, 84, 86, 95]];

  var testPositions = [0, 9, 90, 99, 11, 18, 81, 88, 5, 40, 49, 95, 15, 41, 48, 85];

  for (testNum = 0; testNum < testPositions.length; testNum++) {
    // Move the player to the test position
    gameplay.moveTo(gameplay.board[testPositions[testNum]]);
    var result = gameplay.possibleAttacksBy(basic);
    if (result.length != expectedResults[testNum].length) {
      console.log("Position " + testPositions[testNum] + " Basic attack\n" +
                  "Expected: " + expectedResults[testNum] + "\n" +
                  "Actual:   " + result + "\n");
      return false;
    }

    for (i = 0; i < result.length; i++) {
      if (expectedResults[testNum][i] != result[i]) {
        console.log("Position " + testPositions[testNum] + " Basic attack\n" +
                    "Expected: " + expectedResults[testNum] + "\n" +
                    "Actual:   " + result + "\n");
        return false;
      }
    }
  }
  return true;
}

module.exports.testBoundsPossibleAttacksByRadius = function testBoundsPossibleAttacksByRadius() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);
  // Radius Attack
  var radius = new Item("Radius", 0, 1, 1, 10, 0,60, "Able to hit players around you");
  var gameplay = new Gameplay(p1, p2, p3, p4);
  gameplay.createBoard();
  gameplay.startTurnFor(p1);

  var expectedResults = [
    [1, 10, 11], [8, 18, 19], [80, 81, 91], [88, 89, 98],
    [0, 1, 2, 10, 12, 20, 21, 22], [7, 8, 9, 17, 19, 27, 28, 29],
    [70, 71, 72, 80, 82, 90, 91, 92], [77, 78, 79, 87, 89, 97, 98, 99],
    [4, 6, 14, 15, 16], [30, 31, 41, 50, 51], [38, 39, 48, 58, 59],
    [84, 85, 86, 94, 96], [4, 5, 6, 14, 16, 24, 25, 26],
    [30, 31, 32, 40, 42, 50, 51, 52], [37, 38, 39, 47, 49, 57, 58, 59],
    [74, 75, 76, 84, 86, 94, 95, 96]];

  var testPositions = [0, 9, 90, 99, 11, 18, 81, 88, 5, 40, 49, 95, 15, 41, 48, 85];
  for (testNum = 0; testNum < testPositions.length; testNum++) {
    // Move the player to the test position
    gameplay.moveTo(gameplay.board[testPositions[testNum]]);
    var result = gameplay.possibleAttacksBy(radius);
    if (result.length != expectedResults[testNum].length) {
      console.log("Position " + testPositions[testNum] + " Radius attack\n" +
                  "Expected: " + expectedResults[testNum] + "\n" +
                  "Actual:   " + result + "\n");
      return false;
    }

    for (i = 0; i < result.length; i++) {
      if (expectedResults[testNum][i] != result[i]) {
        console.log("Position " + testPositions[testNum] + " Radius attack\n" +
                    "Expected: " + expectedResults[testNum] + "\n" +
                    "Actual:   " + result + "\n");
        return false;
      }
    }
  }
  return true;
}

module.exports.testBoundsPossibleAttacksByRangedBasic = function testBoundsPossibleAttacksByRangedBasic() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);
  // Ranged Basic
  var rangedBasic = new Item("Ranged Basic", 0, 0, 2, 10, 0.60, "A basic attack with more range");
  var gameplay = new Gameplay(p1, p2, p3, p4);
  gameplay.createBoard();
  gameplay.startTurnFor(p1);

  var expectedResults = [
    [1, 2, 10, 20], [7, 8, 19, 29], [70, 80, 91, 92], [79, 89, 97, 98],
    [1, 10, 12, 13, 21, 31], [8, 16, 17, 19, 28, 38], [61, 71, 80, 82, 83, 91],
    [68, 78, 86, 87, 89, 98], [3, 4, 6, 7, 15, 25], [20, 30, 41, 42, 50, 60],
    [29, 39, 47, 48, 59, 69], [75, 85, 93, 94, 96, 97],
    [5, 13, 14, 16, 17, 25, 35], [21, 31, 40, 42, 43, 51, 61],
    [28, 38, 46, 47, 49, 58, 68], [65, 75, 83, 84, 86, 87, 95]];

  var testPositions = [0, 9, 90, 99, 11, 18, 81, 88, 5, 40, 49, 95, 15, 41, 48, 85];
  for (testNum = 0; testNum < testPositions.length; testNum++) {
    // Move the player to the test position
    gameplay.moveTo(gameplay.board[testPositions[testNum]]);
    var result = gameplay.possibleAttacksBy(rangedBasic);
    if (result.length != expectedResults[testNum].length) {
      console.log("Position " + testPositions[testNum] + " Ranged Basic attack\n" +
                  "Expected: " + expectedResults[testNum] + "\n" +
                  "Actual:   " + result + "\n");
      return false;
    }

    for (i = 0; i < result.length; i++) {
      if (expectedResults[testNum][i] != result[i]) {
        console.log("Position " + testPositions[testNum] + " Ranged Basic attack\n" +
                    "Expected: " + expectedResults[testNum] + "\n" +
                    "Actual:   " + result + "\n");
        return false;
      }
    }
  }
  return true;
}


module.exports.testBoundsPossibleAttacksByRangedRadius = function testBoundsPossibleAttacksByRangedRadius() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);
  // Ranged Radius Attack
  var rangedRadius = new Item("Ranged Radius", 0, 1, 2, 10, 0.60, "A radius attack with more range");
  var gameplay = new Gameplay(p1, p2, p3, p4);
  gameplay.createBoard();
  gameplay.startTurnFor(p1);

  var expectedResults = [
    [1, 2, 10, 11, 12, 20, 21, 22], [7, 8, 17, 18, 19, 27, 28, 29],
    [70, 71, 72, 80, 81, 82, 91, 92], [77, 78, 79, 87, 88, 89, 97, 98],
    [0, 1, 2, 3, 10, 12, 13, 20, 21, 22, 23, 30, 31, 32, 33],
    [6, 7, 8, 9, 16, 17, 19, 26, 27, 28, 29, 36, 37, 38, 39],
    [60, 61, 62, 63, 70, 71, 72, 73, 80, 82, 83, 90, 91, 92, 93],
    [66, 67, 68, 69, 76, 77, 78, 79, 86, 87, 89, 96, 97, 98, 99],
    [3, 4, 6, 7, 13, 14, 15, 16, 17, 23, 24, 25, 26, 27],
    [20, 21, 22, 30, 31, 32, 41, 42, 50, 51, 52, 60, 61, 62],
    [27, 28, 29, 37, 38, 39, 47, 48, 57, 58, 59, 67, 68, 69],
    [73, 74, 75, 76, 77, 83, 84, 85, 86, 87, 93, 94, 96, 97],
    [3, 4, 5, 6, 7, 13, 14, 16, 17, 23, 24, 25, 26, 27, 33, 34, 35, 36, 37],
    [20, 21, 22, 23, 30, 31, 32, 33, 40, 42, 43, 50, 51, 52, 53, 60, 61, 62, 63],
    [26, 27, 28, 29, 36, 37, 38, 39, 46, 47, 49, 56, 57, 58, 59, 66, 67, 68, 69],
    [63, 64, 65, 66, 67, 73, 74, 75, 76, 77, 83, 84, 86, 87, 93, 94, 95, 96, 97]];

  var testPositions = [0, 9, 90, 99, 11, 18, 81, 88, 5, 40, 49, 95, 15, 41, 48, 85];
  for (testNum = 0; testNum < testPositions.length; testNum++) {
    // Move the player to the test position
    gameplay.moveTo(gameplay.board[testPositions[testNum]]);
    var result = gameplay.possibleAttacksBy(rangedRadius);
    if (result.length != expectedResults[testNum].length) {
      console.log("Position " + testPositions[testNum] + " Ranged Radius attack\n" +
                  "Expected: " + expectedResults[testNum] + "\n" +
                  "Actual:   " + result + "\n");
      return false;
    }

    for (i = 0; i < result.length; i++) {
      if (expectedResults[testNum][i] != result[i]) {
        console.log("Position " + testPositions[testNum] + " Ranged Radius attack\n" +
                    "Expected: " + expectedResults[testNum] + "\n" +
                    "Actual:   " + result + "\n");
        return false;
      }
    }
    // var str = "Position " + testPositions[testNum] +" Ranged Radius attack\n";
    // str = str + "|";
    // for (i = 0; i < 100; i++) {
    //   if (result.includes(i)) {
    //     str = str + "X|";
    //   } else if (i == testPositions[testNum]) {
    //     str = str + "S|";
    //   } else {
    //     str = str + " |";
    //   }
    //   if (i % 10 == 9 && i != 99) {
    //     str = str + "\n|";
    //   }
    // }
    // console.log(str);
  }
  return true;
}

// module.exports.testPossibleAttacksFromAllPositions = function testPossibleAttacksFromAllPositions() {
//   var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
//   var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
//   var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
//   var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);
//   // Basic Attack
//   var basic = new Item("Basic", 0, 0, 1, 10, 1.00, "The most basic attack");
//   var gameplay = new Gameplay(p1, p2, p3, p4);
//   gameplay.createBoard();
//   gameplay.startTurnFor(p1);
//
//   for (testNum = 0; testNum < 100; testNum++) {
//     gameplay.moveTo(gameplay.board[testNum]);
//     var result = gameplay.possibleAttacksBy(basic);
//
//     // var str = "Position " + testNum +" Ranged Radius attack\n";
//     // str = str + "|";
//     // for (i = 0; i < 100; i++) {
//     //   if (result.includes(i)) {
//     //     str = str + "X|";
//     //   } else if (i == testNum) {
//     //     str = str + "S|";
//     //   } else {
//     //     str = str + " |";
//     //   }
//     //   if (i % 10 == 9 && i != 99) {
//     //     str = str + "\n|";
//     //   }
//     // }
//     // console.log(str);
//   }
//   return true;
// }


module.exports.testPossibleMovesFrom = function testPossibleMovesFrom() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);


  var gameplay = new Gameplay(p1, p2, p3, p4);
  gameplay.createBoard();

  // Moves from corners - 2 possible moves
  if(gameplay.possibleMovesFrom(gameplay.board[p1.position]) != 1100 || gameplay.possibleMovesFrom(gameplay.board[p2.position]) != 1001 || gameplay.possibleMovesFrom(gameplay.board[p3.position]) != 110 || gameplay.possibleMovesFrom(gameplay.board[p4.position]) != 11)
  {
    return false;
  }

  // Moves from edges - 3 possible moves
  p1.position = 5;
  p2.position = 50;
  p3.position = 95;
  p4.position = 59;
  if(gameplay.possibleMovesFrom(gameplay.board[p1.position]) != 1101 || gameplay.possibleMovesFrom(gameplay.board[p2.position]) != 1110 || gameplay.possibleMovesFrom(gameplay.board[p3.position]) != 111 || gameplay.possibleMovesFrom(gameplay.board[p4.position]) != 1011)
  {
    return false;
  }

  // Moves from center - 4 possible moves
  p1.position = 55;
  if(gameplay.possibleMovesFrom(gameplay.board[p1.position]) != 1111)
  {
    return false;
  }

  // Moves when another player is around
  p1.position = 1;
  p2.position = 8;
  if(gameplay.possibleMovesFrom(gameplay.board[p1.position]) != 1100 || gameplay.possibleMovesFrom(gameplay.board[p2.position]) != 1001)
  {
    return false;
  }


  return true;
}


module.exports.testShrinking = function testShrinking() {
  var p1 = new Player(0, 100, 0, null, null, "Andrew", 0);
  var p2 = new Player(1, 100, 9, null, null, "Amjad", 0);
  var p3 = new Player(2, 100, 90, null, null, "Sultan", 0);
  var p4 = new Player(3, 100, 99, null, null, "Anirudh", 0);


  var gameplay = new Gameplay(p1, p2, p3, p4);
  gameplay.createBoard();

  // 3rd full turn - nothing should happen yet
  gameplay.fullTurnCount = 3;
  gameplay.shouldShrinkBoard();
  if(gameplay.board[0].fallStage != 0)
  {
    return false;
  }

  // 4th full turn - blocks should become UNSTABLE
  gameplay.fullTurnCount = 4;
  gameplay.shouldShrinkBoard();
  if(gameplay.topBounds != 99 || gameplay.board[3].fallStage != 1 || gameplay.board[30].fallStage != 1 || gameplay.board[39].fallStage != 1 || gameplay.board[93].fallStage != 1)
  {
    return false;
  }

  // 5th full turn - blocks should become FALLEN. Bounds and offsets should change. Kill players
  gameplay.currPlayer = p1;
  gameplay.moveTo(gameplay.board[26]);
  gameplay.currPlayer = p2;
  gameplay.moveTo(gameplay.board[33]);


  gameplay.fullTurnCount = 5;
  gameplay.shouldShrinkBoard();

  if(gameplay.topBounds != 89 || gameplay.lowerBounds != 10 || gameplay.rightOffset != 8 || gameplay.leftOffset != 1 || gameplay.width != 8 || gameplay.size != 64)
  {
    return false;
  }
  if(gameplay.board[3].fallStage != 2 || gameplay.board[30].fallStage != 2 || gameplay.board[39].fallStage != 2 || gameplay.board[93].fallStage != 2)
  {
    return false;
  }
  if(gameplay.playerList.length != 3) // p3 and p4 die
  {
    return false;
  }



  return true;
}
