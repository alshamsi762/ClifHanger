/** Boardspace Object & Functions **/

class Boardspace {

  // Constructor for Boardspace Object
  constructor(position, occupier, trap, loot, fallStage) {
    this.position = position;
    this.occupier = occupier;
    this.trap = trap;
    this.loot = loot;
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
