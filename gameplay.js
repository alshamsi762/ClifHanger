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
    var list = new doubleList();
    list.addPlayer(p1);
    list.addPlayer(p2);
    list.addPlayer(p3);
    list.addPlayer(p4);

    this.playerList = list;
  }

  // Creates Board. Places players and items on board
  createBoard() {

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

  }

  // Remove player from linked list. Call any animations
  killPlayer(player) {

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

  }

  // Check if only one player alive.
  hasEnded() {

  }


}
