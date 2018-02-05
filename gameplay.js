class Gameplay() {

  //TODO Figure out turn timer.
  // Timer function. Check if player state is still Active after ten seconds
  // Would need to figure out how to track old and current position

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
      this.head = node;
      this.tail = node;
      this.head.next = node;
      this.head.previous = node;
      this.tail.next = node;
      this.tail.previous = node;  // I think we need to set all of these to make it a double linked list and to loop around?
    }
    else
    {
      this.tail.next = node;
      node.previous = this.tail;
      node.next = this.head;
      this.tail = node;
      this.head.previous = node;
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

    if(this.length == 0)
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
        if(nodeToRemove == this.head && this.length == 1)   // it is the only node
        {
          this.head = null;   // empty the list
          this.tail = null;
          this.length = 0;
        }
        else    // this should work for any other case since I made it a double linked list that loops.
        {
          nodeToRemove.previous.next = nodeToRemove.next;
          nodeToRemove.next.previous = nodeToRemove.previous;
          this.length--;
        }
      }
    }

    return this.length;  // We can change this if we need to
  };



  // Const. Linked List (Players), Array for all Items, # Alive, Turn Timer, currPlayer, currItem, fullTurnCount
  constructor(p1, p2, p3, p4) {
    // Linked list of players
    var sentinel = new Player(-1, 0, null, null, null, null);
    var list = new doubleList();
    list.addPlayer(p1);
    list.addPlayer(p2);
    list.addPlayer(p3);
    list.addPlayer(p4);
    list.addPlayer(sentinel);

    this.playerList = list;


    // Array of all Items
    this.POTION10 = 1;
    this.POTION30 = 2;
    this.RADIUS = 3;    // radius attack
    this.TELEPORT = 4;
    this.TRAP = 5;
    this.LONG = 6;    // range attack, change name?
    this.STRONG = 7;    // stronger attack, more damage, change name?

    var allItems = [1, 2, 3, 4, 5, 6, 7];    // not sure if this is feasible lol
    this.items = allItems;


    var currPlayer = null, currItem = null, fullTurnCount = 0;
  }

  // Creates Board. Places players and items on board
  createBoard() {
    var board = new Array(100);
    for(var i = 0; i < 99; i++)
    {
      board.push(i);
    }

    // place players on corners
    var currPlayer - this.playerList;
    board[0] = currPlayer;
    currPlayer = currPlayer.next;
    board[9] = currPlayer;
    currPlayer = currPlayer.next;
    board[99] = currPlayer;
    currPlayer = currPlayer.next;
    board[90] = currPlayer;

    // TODO: place items on board

  }

  // Starts turn timer, calculate possible moves, set currentPlayer & currentItem, change player state to Active. Disable "end turn"
  startTurnFor(player) {

  }

  // Update Linked List, change player state to Idle
  endTurnFor(player) {

  }

  // Update currPlayer position, apply effects of any trap or add item, set currItem to Basic Attack and call possible attacks.
  // Enable "end turn" button
  moveTo(boardspace) {

  }

  // Check if player, apply effects to player. Apply effects of item to the boardspace if any. End current player's turn
  attack(item, boardspace) {

  }

  // Sets the current players item to the currentItem (basic on first call). Waits for user input to select other item.
  // Check if Offensive or Defensive, calc possibleAttacks if applicable.
  chooseItem(item) {

  }

  // Called when user activates item. Checks if Offensive or Defensive. Attack if offens. Apply effects if defens.
  // remove item from player inventory.
  useItem(item) {

  }

  // Randomly drop an item on a random (valid) boardspace.
  dropItem() {

  }

  // Shrink the board. For each dropped, check if player is there, kill player if they are.
  shrinkBoard() {
    // drop the blocks that are in FALLEN state or out of bounds
    // call this in shouldShrinkBoard
  }

  // Remove player from linked list. Call any animations
  killPlayer(player) {
    this.playerList.removePlayer(player.id);
    // should we set the player to null?
    // call any animations
  }

  // Check attributes of boardspace
  canMoveTo(boardspace) {

  }

  // Check boardspaces around currPlayer's boardspace. Display in UI
  possibleMovesFrom(boardspace) {

  }

  // Use currPlayer pos. and item to display possible attacks. Display in UI
  possibleAttacksBy(item) {

  }

  // Check full-turn count. Change fallStage before blocks should fall.
  shouldShrinkBoard() {
    var count = this.fullTurnCount;
    if(count == 4 || count == 11 || count == 20)
    {
      // change outer blocks to UNSTABLE
    }
    if(count == 5 || count == 12 || count == 21)    // After 5 - 7 - 9 turns
    {
      // change outer blocks to FALLEN
      // change outer boundaries
      // call shrinkBoard
    }

  }

  // Check if only one player alive.
  hasEnded() {
    if(this.playerList.length == 1)
    {
      // return true?
    }
  }

  // if currPlayer reached sentinel, Increment fullTurnCount and currPlayer.next
  nextTurn() {
    var player = this.currPlayer;
    if(player != null && player.id == -1)
    {
      this.fullTurnCount++;
      this.currPlayer = this.currPlayer.next;
    }
  }


}
