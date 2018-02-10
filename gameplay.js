const Item = require('./item.js');
const Player = require('./player.js');
const Boardspace = require('./boardspace.js');


// Implementation of double linked List
function node(player)
{
  this.data = player;
  this.previous = null;
  this.next = null;
}

function doubleList()
{
  this.length = 0;  // we could use this to keep track of players alive!
  this.head = null;
  this.tail = null;
}

// function to add a player to the linked list
doubleList.prototype.addPlayer = function(player)
{
  var newPlayer = new node(player);

  if(this.length == 0)
  {
    this.head = newPlayer;
    this.tail = newPlayer;
    this.head.next = newPlayer;
    this.head.previous = newPlayer;
    this.tail.next = newPlayer;
    this.tail.previous = newPlayer;  // I think we need to set all of these to make it a double linked list and to loop around?

  }
  else
  {
    this.tail.next = newPlayer;
    newPlayer.previous = this.tail;
    newPlayer.next = this.head;
    this.tail = newPlayer;
    this.head.previous = newPlayer;
  }

  this.length++;

  return this.length;  // We can change this if we need to
};  // idk why there is a ; here?


// function to remove a player from the linked list
doubleList.prototype.removePlayer = function(id)  // we can search for the player's id to remove them?
{
  var message1 = {failure: 'Error: List is empty!'};
  var message2 = {failure: 'Error: Player not found!'};
  var nodeToRemove = null;
  var currentNode = this.head;
  var count = 0;

  if(this.length == 1)
  {
    throw new Error(message1.failure);
  }
  else
  {
    while(count < this.length)   // loop through the whole list
    {
      if(currentNode.data.id == id)
      {
        nodeToRemove = currentNode;   // if player found, set it to nodeToRemove
      }
      currentNode = currentNode.next;
      count++;
    }

    if(nodeToRemove == null)    // if not found
    {
      throw new Error(message2.failure);
    }
    else    // if found
    {
      if(nodeToRemove == this.head && this.length == 2)   // it is the only node ( with the sentinel )
      {
        this.head = null;   // empty the list
        this.tail = null;
        this.length = 0;
      }
      else    // this should work for any other case since I made it a double linked list that loops.
      {
        nodeToRemove.previous.next = nodeToRemove.next;
        nodeToRemove.next.previous = nodeToRemove.previous;
        this.head = this.tail.next;
        this.head.previous = this.tail;
        this.length--;
      }
    }
  }

  return this.length;  // We can change this if we need to
};


module.exports = class Gameplay {

  //TODO Figure out turn timer.
  // Timer function. Check if player state is still Active after ten seconds
  // Would need to figure out how to track old and current position

  // Const. Linked List (Players), Array for all Items, # Alive, Turn Timer, currPlayer, currItem, fullTurnCount
  constructor(p1, p2, p3, p4) {
    // Linked list of players
    var sentinel = new Player(-1, -1, -1, null, null, null);
    var list = new doubleList();
    list.addPlayer(p1);
    list.addPlayer(p2);
    list.addPlayer(p3);
    list.addPlayer(p4);
    list.addPlayer(sentinel);

    this.playerList = list;


    // Array of all Items
    this.BASIC = 0;
    this.POTION10 = 1;
    this.POTION30 = 2;
    this.RADIUS = 3;    // radius attack
    this.TELEPORT = 4;
    this.TRAP = 5;
    this.LONG = 6;    // range attack, change name?
    this.STRONG = 7;    // stronger attack, more damage, change name?
    this.MOVEX2 = 8;

    var allItems = [0, 1, 2, 3, 4, 5, 6, 7, 8];    // not sure if this is feasible lol
    this.items = allItems;
    this.basicAttack = new Item("Basic", 0, 0, 1, 10, 1.00, "The most basic attack. Can hit players above, below, or to the sides for 10 damage.");


    this.size = 100, this.width = 10;


    this.currPlayer = null, this.currItem = null, this.fullTurnCount = 0;
    this.topBounds = 99, this.lowerBounds = 0, this.leftOffset = 0, this.rightOffset = 9;
    this.board = [];
    this.attackSpaces = []; // List of spaces that the current attack will hit


    // Musket - low damage ranged basic
    // Bolt Action - high damage ranged basic
    // Broadsword - low damage radius
    // Fart - high damage radius
    // Big Fart - low damage ranged radius
    // Nuke - high damage ranged radius
    // Sawed-Off - basic (high damage)
    // Beartrap - trap
    // Landmine - trap (more damage)
    // Minor Potion - defensive, heals 10
    // Major Potion - defensive, heals 30
    // Move Again - defensive, allows player to move again instead of attack
    // Teleport - defensive, allows player to move to any valid boardspace
    this.items = [];
    this.items.push(new Item("Musket", 0, 0, 2, 15, 8, "Musket Description"));
    this.items.push(new Item("Bolt Action", 0, 0, 2, 30, 4, "Bolt Action Description"));
    this.items.push(new Item("Broadsword", 0, 1, 1, 10, 7, "Broadsword Description"));
    this.items.push(new Item("Fart", 0, 1, 1, 25, 4, "Fart Description"));
    this.items.push(new Item("Big Fart", 0, 1, 2, 15, 5, "Big Fart Description"));
    this.items.push(new Item("Nuke", 0, 1, 2, 25, 2, "Nuke Description"));
    this.items.push(new Item("Sawed-Off", 0, 0, 1, 30, 4, "Sawed-Off Description"));
    this.items.push(new Item("Beartrap", 0, 2, 0, 15, 5, "Beartrap Description"));
    this.items.push(new Item("Landmine", 0, 2, 0, 30, 3, "Landmine Description"));
    this.items.push(new Item("Minor Potion", 1, 0, 0, 10, 8, "Minor Potion Description"));
    this.items.push(new Item("Major Potion", 1, 0, 0, 30, 4, "Major Potion Description"));
    this.items.push(new Item("Move Again", 1, 0, 0, 0, 4, "Move Again Description"));
    this.items.push(new Item("Teleport", 1, 0, 0, 0, 2, "Teleport Description"));

    this.drops = [];
    for (var i = 0; i < this.items.length; i++) {
      for(var j = 0;j < this.items[i].rarity; j++) {
        this.drops.push(i);
      }
    }

    console.log("Item drops: " + this.drops);
  }

  // Creates Board. Places players and items on board
  // TODO: TESTED!
  createBoard() {

    for(i = 0; i < 100; i++)
    {
      this.board.push(new Boardspace(i, null, null, null, 0));
    }

    var temp = this.playerList.head;

    this.board[0].setPlayer(temp.data);
    temp = temp.next;
    this.board[9].setPlayer(temp.data);
    temp = temp.next;
    this.board[90].setPlayer(temp.data);
    temp = temp.next;
    this.board[99].setPlayer(temp.data);


    // place items on board
    this.initialDrop();


  }


  // Starts turn timer, calculate possible moves, set currentPlayer, change player state to Active. Disable "end turn"
  // TODO: TESTED!
  startTurnFor(player) {
    // Start turn timer

    // Calculate possible moves from player's position
    this.possibleMovesFrom(this.board[player.position]);

    // Change currentPlayer and currentItem to start of turn values
    this.currPlayer = player;
    // this.currItem = this.items[this.BASIC]; <= moved to moveTo()
    this.currPlayer.status = 1; // Change status to Active "1"

  }

  // Update Linked List, change player state to Idle
  // TODO: TESTED!
  endTurnFor(player) {
    // Reset turn timer?

    player.status = 0;
  }

  // Update currPlayer position, apply effects of any trap or add item, set currItem to Basic Attack and call possible attacks.
  // Enable "end turn" button
  // TODO: TESTED!
  moveTo(boardspace) {
    // Remove the player from their current boardspace
    this.board[this.currPlayer.position].removePlayer();

    // Move the player to the requested boardspace
    boardspace.setPlayer(this.currPlayer);

    // Check for traps, or items
    if (boardspace.hasTrap()) {
      // End player's turn
    }

    if (boardspace.hasLoot()) {
      if (boardspace.loot.itemType == 0) {  // Offensive
        var success = this.currPlayer.pushOffensiveItem(boardspace.loot);
        if (success) {
          boardspace.removeLoot();
        } else {
          // Inventory full
          //TODO UI Change
        }
      } else if (boardspace.loot.itemType == 1) { // Defensive
        var success = this.currPlayer.pushDefensiveItem(boardspace.loot);
        if (success) {
          boardspace.removeLoot();
        } else {
          // Inventory full
          //TODO UI Change
        }
      }
    }
    // Set the currentItem to the basic attack
    this.chooseItem(this.items[this.BASIC]);

    // TODO Call possible attacks function

  }

  // Check if player, apply effects to player. Apply effects of item to the boardspace if any. End current player's turn
  // TODO: Test
  attack(item, boardspace) {
    // If item is a trap, ignore checking boardspace
  }

  // Sets the current players item to the currentItem (basic on first call). Waits for user input to select other item.
  // Check if Offensive or Defensive, calc possibleAttacks if applicable.
  // TODO: Test
  chooseItem(item) {
    this.currItem = item;
    if (item.itemType == 0) { this.possibleAttacksBy(item); } // Offensive
    // Display current item as selected in UI
  }

  // Called when user activates item. Checks if Offensive or Defensive. Attack if offens. Apply effects if defens.
  // remove item from player inventory.
  useItem(item) {

  }

  // Randomly drop an item on a random (valid) boardspace.
  // TODO: TESTED!
  dropItem() {
    var itemPos = 0;
    var item = null;
    itemPos = Math.floor(Math.random() * this.size + this.lowerBounds);

    while(this.board[itemPos].fallStage != 0 || this.board[itemPos].hasPlayer() || this.board[itemPos].hasLoot())
    {
      itemPos = Math.floor(Math.random() * this.size + this.lowerBounds);
    }

    item = this.randomItem();

    // Apply changes
    this.board[itemPos].setLoot(item);
    // Call UI

  }

  // Shrink the board. For each dropped, check if player is there, kill player if they are.
  // TODO: TESTED!
  shrinkBoard() {
    var top = this.topBounds, lower = this.lowerBounds, right = this.rightOffset, left = this.leftOffset;
    // change outer blocks to FALLEN and kill any players found
    for(i = lower; i < lower + 10; i++)   // lower row
    {
      this.board[i].fallStage = 2;
      if(this.board[i].hasPlayer())
      {
        this.killPlayer(this.board[i].player);
      }

      this.board[top - i].fallStage = 2;
      if(this.board[top - i].hasPlayer())
      {
        this.killPlayer(this.board[top - i].player);
      }
    }

    for(i = lower; i < top; i+=10)   // left column
    {
      this.board[i].fallStage = 2;
      if(this.board[i].hasPlayer())
      {
        this.killPlayer(this.board[i].player);
      }

      this.board[top - i].fallStage = 2;
      if(this.board[top - i].hasPlayer())
      {
        this.killPlayer(this.board[top - i].player);
      }
    }


    // change boundaries
    this.width -= 2;
    this.size = this.width * this.width;
    this.lowerBounds += 10;
    this.topBounds -= 10;
    this.rightOffset--;
    this.leftOffset++;
    // call UI
    // call this in shouldShrinkBoard

  }

  // Remove player from linked list. Call any animations
  // TODO: TESTED!
  killPlayer(player) {
    this.board[player.position].removePlayer();   // had to add this to remove the player from the boardspace
    this.playerList.removePlayer(player.id);
    // should we set the player to null?
    // call any animations
  }

  // Check attributes of boardspace
  // TODO: TESTED! in testMoving
  canMoveTo(boardspace) {
    return boardspace.playerCanEnter();
  }

  // Check boardspaces around currPlayer's boardspace. Display in UI
  // TODO: TESTED!
  possibleMovesFrom(boardspace) {
    var pos = boardspace.position;
    var moves = 0; // moves will start as 0000. 1000 digits means up, 0100 means right, 0010 means down, 0001 means left. Just for testing.
    if(pos + 10 <= this.topBounds && this.canMoveTo(this.board[pos + 10]))
    {
      // can move up, give it
      moves += 1000;
    }
    if((pos % 10) != this.rightOffset && this.canMoveTo(this.board[pos + 1]))
    {
      // can move right
      moves += 100;
    }
    if(pos - 10 >= this.lowerBounds && this.canMoveTo(this.board[pos - 10]))
    {
      // can move down
      moves += 10;
    }
    if((pos % 10) != this.leftOffset && this.canMoveTo(this.board[pos - 1]))
    {
      // can move left
      moves += 1;
    }

    return moves;
  }

  // Use currPlayer pos. and item to display possible attacks. Display in UI
  // Maybe return an array of the possible boardspace positions?
  // TODO: TESTED!
  possibleAttacksBy(item) {
    var pos = this.currPlayer.position;
    var upOrDown = 10, leftOrRight = 1;
    this.attackSpaces = []; // Reset attackSpaces

    // TRAP, can be placed at any valid boardspace
    if (item.attackType == 2) {
      for (i = 0; i < 100; i++) {
        // Check if boardspace can accept a trap item, add it to attackSpaces
        if (this.board[i].playerCanEnter() && this.board[i].hasTrap() == false) {
          this.attackSpaces.push(i);
        }
      }
      return this.attackSpaces;
    }

    for (i = 0; i < 100; i++) {
      var leftBound = (i % 10 <= pos % 10);
      var rightBound = (i % 10 >= pos % 10);
      var horiRange = Math.abs(i % 10 - pos % 10);
      var vertRange = Math.abs((i-(i % 10) - (pos - (pos % 10)))) / 10;
      if ((leftBound || rightBound) && horiRange <= item.range) {
        if (vertRange <= item.range && i != pos) {
          if (item.attackType == 0 && (i % 10 ==  pos % 10 || (i-(i%10) == pos-(pos%10)))) {
            this.attackSpaces.push(i);
          } else if (item.attackType == 1) {
            this.attackSpaces.push(i);
          }
        }
      }
    }
    // console.log("Starting at: " + pos + "\n" + positions);
    return this.attackSpaces;
  }

  // Check full-turn count. Change fallStage before blocks should fall.
  // TODO: TESTED!
  shouldShrinkBoard() {
    var count = this.fullTurnCount;
    if(count == 4 || count == 11 || count == 20)
    {
      var top = this.topBounds, lower = this.lowerBounds, right = this.rightOffset, left = this.leftOffset;

      // change outer blocks to UNSTABLE
      for(i = lower; i < lower + 10; i++)   // lower row
      {
        this.board[i].fallStage = 1;
        this.board[top - i].fallStage = 1;
      }

      for(i = lower; i < top; i+=10)   // left column
      {
        this.board[i].fallStage = 1;
        this.board[top - i].fallStage = 1;
      }

    }
    if(count == 5 || count == 12 || count == 21)    // After 5 - 7 - 9 turns
    {
      // call shrinkBoarb
      this.shrinkBoard();
    }

  }

  // Check if only one player alive.
  // TODO: Test
  hasEnded() {
    if(this.playerList.length == 2)   // one for player, one for sentinel?
    {
      // Last player has won
    }
    if(this.playerList.length == 1)
    {
      // All players fell and died? No one wins
    }
  }

  // if currPlayer reached sentinel, Increment fullTurnCount and currPlayer.next
  // TODO: Test
  nextTurn() {
    var player = this.currPlayer;
    if(player != null && player.id == -1)
    {
      this.fullTurnCount++;
      this.currPlayer = this.currPlayer.next;
    }
  }

  // calculate moves required to go from a to b (only works at the beginning of the game when the players are at the initial positions - Generally faulty logic)
  // used to drop items at the beginning of the game
  // TODO: TESTED!
  movesFrom(a, b)
  {
    var diff = Math.abs(a - b);
    var moves = 0;
    moves = moves + Math.floor(diff / 10) + (diff % 10);
    return moves;
  }

  // Drops 10 random items at random positions not occupied and at least 2 moves away from every players, at the beginning of the game.
  // TODO: TESTED!
  initialDrop()
  {
    var count = 0;
    var itemPos = 0;
    var item = null;
    while(count < 10)
    {
      // item = call amjad's algorithm
      item = this.randomItem();
      itemPos = Math.floor(Math.random() * this.size + this.lowerBounds);
      // makes sure no item is dropped less than 2 moves away from all players
      while(this.board[itemPos].hasLoot() || this.movesFrom(0, itemPos) < 2 || this.movesFrom(9, itemPos) < 2 || this.movesFrom(90, itemPos) < 2 || this.movesFrom(99, itemPos) < 2)
      {
        itemPos = Math.floor(Math.random() * this.size + this.lowerBounds);
      }
      this.board[itemPos].setLoot(item);
      count++;
    }
  }





  // Returns a random item from the items list
  // TODO: TESTED!
  randomItem()
  {
    return this.items[Math.floor(Math.random() * this.items.length)];;
  }



}
