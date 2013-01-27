Gun.prototype = new Drawable();
function Gun(game, owner, width, height, ticksToReload) {
    Drawable.call(this, game ? game.ctx : null, null, null, width, height);
    this.game = game;
    this.owner = owner;
    this.ticksToReload = ticksToReload;
}
Gun.prototype.shoot = function() { };