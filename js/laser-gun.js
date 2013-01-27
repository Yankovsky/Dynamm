LaserGun.prototype = new Gun();
function LaserGun(game, owner) {
    Gun.call(this, game, owner, 20, 80, 36)
}
LaserGun.prototype.shoot = function() {
    if (this.game.ticks % this.ticksToReload == 0) {
        this.game.addBullet(new LaserShot(this.game, this.center().x, this.y));
    }
};
LaserGun.prototype.draw = function() {
    this.game.ctx.fillStyle = "blue";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};

//TODO move to singletons var laser = new Gun(...) no need in complex hierarchy