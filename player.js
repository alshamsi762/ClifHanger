/** Player Object & Functions **/

class Player {

  // Constructor for Player
  constructor(id, health, position, offensive, defensive, name) {
    this.id = id;
    this.health = health;
    this.position = position;
    this.offensive = offensive;
    this.defensive = defensive;
    this.name = name;
  }

  // Damage the player's health by the amount. Works for healing w/ < 0 values
  damageHealthBy(amount) {
    this.health -= amount;
  }

  // Change the player's position
  newPosition(position) {
    this.position = position;
  }

  // Push an offensive item to player's inventory
  pushOffensiveItem(offensiveItem) {
    this.offensive.push(offensiveItem);
  }

  // Push a defensive item to player's inventory
  pushDefensiveItem(defensiveItem) {
    this.defensive.push(defensiveItem);
  }

  // Pop an offensiveItem from the player's inventory
  popOffensiveItem() {
    return this.offensive.pop();
  }

  // Pop a defensiveItem from the player's inventory
  popDefensiveItem() {
    return this.defensive.pop();
  }

  // Get player health
  getHealth() {
    return this.health;
  }
}
