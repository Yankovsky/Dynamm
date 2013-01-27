Brick.prototype = new Enemy();
function Brick(game, x, y, width, height) {
    Enemy.call(this, game, x, y, width, height, 100);
}
Brick.prototype.draw = function() {
    this.ctx.fillStyle = "#" + Math.floor(15 + (this.health / this.fullHealth) * 240).toString(16) + "0000";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
};