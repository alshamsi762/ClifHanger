/** Item Object & Functions **/

module.exports = class Item {

  // Constructor for Item Object
  constructor(name, itemType, attackType, range, damage, rarity, description) {
    this.name = name; // String
    this.itemType = itemType; // 0-offensive, 1-defensive
    this.attackType = attackType; // 0-basic, 1-radius
    this.range = range; // 1, 2
    this.damage = damage; // number
    this.rarity = rarity; //
    this.description = description  // String
    this.OFFENSE = 0;
    this.DEFENSE = 1;
    this.BASIC = 0;
    this.RADIUS = 1;
  }

}
