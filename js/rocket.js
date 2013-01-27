Rocket.prototype = new Bullet();
function Rocket(game, x, y) {
    var rocketWidth = 15;
    var rocketHeight = 30;
    var rocketSpeed = -17;
    var rocketDamage = 25;
    Bullet.call(this, game, x, y, rocketWidth, rocketHeight, rocketSpeed, rocketDamage);
}
Rocket.prototype.draw = function() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};