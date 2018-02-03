class Gameplay() {

  //TODO Figure out turn timer.
  // Timer function. Check if player state is still Active after ten seconds
  // Would need to figure out how to track old and current position

  // Const. Linked List (Players), Array for all Items, # Alive, Turn Timer, currPlayer, currItem, fullTurnCount
  constructor(p1, p2, p3, p4) {

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
