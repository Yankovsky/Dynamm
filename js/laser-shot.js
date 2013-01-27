LaserShot.prototype = new Bullet();
function LaserShot(game, x, y) {
    var laserWidth = 3;
    var laserHeight = 100;
    var laserSpeed = -50;
    var laserDamage = 120;
    Bullet.call(this, game, x, y, laserWidth, laserHeight, laserSpeed, laserDamage);
}
LaserShot.prototype.draw = function() {
    this.game.ctx.fillStyle = "aqua";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};