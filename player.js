/** Player Object & Functions **/
module.exports = class Player {

  // Constructor for Player
  constructor(id, health, position, offensive, defensive, name) {
    this.id = id; // 0 - (# of players - 1)
    this.health = health; // Integer
    this.position = position; // Integer, 1-(boardwidth^2)
    this.offensive = offensive; // List of item objects
    this.defensive = defensive; // List of item objects
    this.name = name;  // String name
  }

  // Damage the player's health by the amount.
  damageHealthBy(amount) {
    if (typeof(amount) != 'number') { return; }
    if (amount % 1 !== 0) { return; }

    if (this.health - amount < 0) {
      this.health = 0;
    } else if (this.health > 0) {
      this.health -= amount;
    } else {
      this.health = 0;
    }
  }
  // Heals the player's health by the amount.
  healHealthBy(amount) {
    if (typeof(amount) != 'number') { return; }
    if (amount % 1 !== 0) { return; }
    
    if (this.health <= 0) {
      this.health = 0;
    } else if (this.health + amount <= 100) {
      this.health += amount;
    } else {
      this.health = 100;
    }
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
