RocketGun.prototype = new Gun();
function RocketGun(game, owner) {
    Gun.call(this, game, owner, 40, 60, 10)
}
RocketGun.prototype.shoot = function() {
    if (this.game.ticks % this.ticksToReload == 0) {
        this.game.gameObjects.push(new Rocket(this.game, this.center().x, this.y));
    }
};
RocketGun.prototype.draw = function() {
    this.game.ctx.fillStyle = "green";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};