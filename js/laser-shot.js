LaserShot.prototype = new Bullet();
function LaserShot(game, x, y) {
    var rocketWidth = 3;
    var rocketHeight = 100;
    var rocketSpeed = -50;
    Bullet.call(this, game, x, y, rocketWidth, rocketHeight, rocketSpeed);
}
LaserShot.prototype.draw = function() {
    this.game.ctx.fillStyle = "aqua";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};