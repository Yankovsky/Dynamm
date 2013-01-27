Bullet.prototype = new GameObject();
function Bullet(game, x, y, width, height, speed) {
    GameObject.call(this, game, x, y, width, height);
    this.speed = speed;
}
Bullet.prototype.update = function() {
    this.y += this.speed;
};