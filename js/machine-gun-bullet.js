MachineGunBullet.prototype = new Bullet();
function MachineGunBullet(game, x, y) {
    var bulletWidth = 4;
    var bulletHeight = 5;
    var bulletSpeed = -25;
    var bulletDamage = 5;
    Bullet.call(this, game, x, y, bulletWidth, bulletHeight, bulletSpeed, bulletDamage);
}
MachineGunBullet.prototype.draw = function() {
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};