/** Item Object & Functions **/

class Item {

  // Constructor for Item Object
  constructor(name, itemType, attackType, range, damage, rarity) {
    this.name = name;
    this.itemType = itemType;
    this.attackType = attackType; // 0-basic, 1-radius
    this.range = range; // 1, 2
    this.damage = damage; // number
    this.rarity = rarity;
    // Description
  }

}
