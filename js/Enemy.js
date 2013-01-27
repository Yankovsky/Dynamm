Enemy.prototype = new GameObject();
function Enemy(game, x, y, width, height, health) {
    GameObject.call(this, game, x, y, width, height);
    this.health = health;
    this.fullHealth = health;
}