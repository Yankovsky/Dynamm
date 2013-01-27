Player.prototype = new GameObject();
function Player(game, x, y, width, height, speed) {
    GameObject.call(this, game, x, y, width, height);
    this.speed = speed;
    this.leftGun = null;
    this.rightGun = null;
}
Player.prototype.update = function() {
    // TODO Yankovsky Refactor
    var centerX = this.center().x;
    if (Math.abs(this.game.mouseX - centerX) < this.speed) {
        this.centerX(this.game.mouseX);
    } else if (centerX > this.game.mouseX) {
        this.x -= this.speed;
    } else if (centerX < this.game.mouseX) {
        this.x += this.speed;
    }

    //TODO refactor. We need some mechanics for creating different battleships with different count and positioning of guns
    var guns = [];
    if (this.leftGun) {
        this.leftGun.x = this.x - this.leftGun.width;
        this.leftGun.y = this.y;
        guns.push(this.leftGun);
    }
    if (this.rightGun) {
        this.rightGun.x = this.x + this.width;
        this.rightGun.y = this.y;
        guns.push(this.rightGun);
    }

    for (var i = 0; i < guns.length; i++) {
        var gun = guns[i];
        if (gun) {
            gun.shoot();
        }
    }
};
Player.prototype.draw = function() {
    this.game.ctx.fillStyle = "gray";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    var guns = [this.leftGun, this.rightGun];
    for (var i = 0; i < guns.length; i++) {
        var gun = guns[i];
        if (gun) {
            gun.draw();
        }
    }
};