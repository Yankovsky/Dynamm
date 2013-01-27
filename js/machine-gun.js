MachineGun.prototype = new Gun();
function MachineGun(game, owner) {
    Gun.call(this, game, owner, 30, 50, 2)
}
MachineGun.prototype.shoot = function() {
    if (this.game.ticks % this.ticksToReload == 0) {
        this.game.addBullet(new MachineGunBullet(this.game, this.center().x, this.y));
    }
};
MachineGun.prototype.draw = function() {
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};