Bullet.prototype = new GameObject();
function Bullet(game, x, y, width, height, speed, damage) {
    GameObject.call(this, game, x, y, width, height);
    this.speed = speed;
    this.damage = damage;
}
Bullet.prototype.update = function() {
    this.y += this.speed;
};