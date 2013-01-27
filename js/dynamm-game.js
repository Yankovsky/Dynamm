function DynammGame(ctx, width, height, delayBetweenFrames) {
    var that = this;
    this.ctx = ctx;
    this.interval = null;
    this.ticks = 0;
    var gameObjects = {players : [], bullets : [], enemies : []};

    this.addPlayer = function(player) {
        gameObjects.players.push(player);
    };
    this.addBullet = function(bullet) {
        gameObjects.bullets.push(bullet)
    };
    this.addEnemy = function(enemy) {
        gameObjects.enemies.push(enemy)
    };

    //remove this
    function addPlayerWithGun() {
        var player = new Player(that, 100, height - 100, 100, 100, 20);
        //player.leftGun = new LaserGun(that, player);
        //player.leftGun = new RocketGun(that, player);
        //player.leftGun = new MachineGun(that, player);
        player.leftGun = new RocketGun(that, player);
        player.rightGun = new RocketGun(that, player);

        that.addPlayer(player);
    }
    function addBricks() {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 2; j++) {

                var brick = new Brick(that, 20 + i * 120, 20 + j * 90, 110, 70);

                that.addEnemy(brick);
            }
        }
    }

    //TODO move with initialization to level entity or something
    addPlayerWithGun();
    addBricks();
    //end

    this.mouseX = 0;
    window.document.addEventListener("mousemove", function(event) {
        that.mouseX = event.clientX;
    }, false);

    this.start = function() {
        setInterval(updateGameCycle, delayBetweenFrames);
    };

    function updateGameCycle() {
        update();
        draw()
    }

    function update() {
        for (var i = 0; i < gameObjects.players.length; i++) {
            var player = gameObjects.players[i];
            player.update();
        }
        //TODO normal collision check

        for (var j = 0; j < gameObjects.bullets.length; j++) {
            var bullet = gameObjects.bullets[j];
            bullet.update();
        }

        for (var i = 0; i < gameObjects.enemies.length; i++) {
            var enemy = gameObjects.enemies[i];
            enemy.update();
            for (var j = 0; j < gameObjects.bullets.length; j++) {
                var bullet = gameObjects.bullets[j];
                if (bullet.x >= enemy.x && bullet.x <= enemy.x + enemy.width &&
                    bullet.y >= enemy.y && bullet.y <= enemy.y + enemy.height) {
                    enemy.health -= bullet.damage;
                    if (enemy.health <= 0) {
                        //TODO take from list end
                        delete gameObjects.enemies[i];
                        gameObjects.enemies.splice(i, 1);
                        enemy = null;
                        break;
                    }
                    delete gameObjects.bullets[j];
                    gameObjects.bullets.splice(j, 1);
                    bullet = null;
                }
            }
        }
        that.ticks++;
    }

    function draw() {
        clearCanvas();

        for (var prop in gameObjects) {
            for (var i = 0; i < gameObjects[prop].length; i++) {
                gameObjects[prop][i].draw();
            }
        }
    }

    function gameEnd() {
        clearInterval(that.interval);
    }

    function clearCanvas() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
    }
}