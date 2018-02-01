/** Boardspace Object & Functions **/

class Boardspace {

  // Constructor for Boardspace Object
  constructor(position, occupier, trap, loot, fallStage) {
    this.position = position; // integer 0-99
    this.occupier = occupier; // player object
    this.trap = trap; // item object
    this.loot = loot; // item object
    this.fallStage = fallStage; // 0,1,2 => stable, unstable, fallen
  }

  // Check if Boardspace is occupied
  isOccupied() {
    return (this.occupier != null);
  }

  // Check if Boardspace has a trap
  hasTrap() {
    return (this.trap != null);
  }

  // Check if Boardspace has loot
  hasLoot() {
    return (this.loot != null);
  }

  // Increment the fallStage
  incrementFallStage() {
    this.fallStage += 1;
  }

}
