GameObject.prototype = new Drawable();
function GameObject(game, x, y, width, height) {
    Drawable.call(this, game ? game.ctx : null, x, y, width, height);
    this.game = game;
}
GameObject.prototype.update = function() {};