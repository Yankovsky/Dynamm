function Drawable(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
Drawable.prototype.draw = function() {};
//TODO reuse
Drawable.prototype.centerX = function(x) {
    this.x = x - this.width / 2;
};
Drawable.prototype.center = function() {
    return {x : this.x + this.width / 2, y : this.y + this.height / 2};
};