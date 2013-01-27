function DynammGame(ctx, width, height, delayBetweenFrames) {
    var that = this;
    this.ctx = ctx;
    this.interval = null;
    this.ticks = 0;
    this.gameObjects = [];
    //remove this
    function addPlayerWithGun() {
        var player = new Player(that, 100, height - 100, 100, 100, 20);
        player.leftGun = new RocketGun(that, player);
        player.rightGun = new RocketGun(that, player);
        that.gameObjects.push(player);
    }

    addPlayerWithGun();
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
        for (var i = 0; i < that.gameObjects.length; i++) {
            var obj = that.gameObjects[i];
            obj.update();
        }
        that.ticks++;
    }

    function draw() {
        clearCanvas();

        for (var i = 0; i < that.gameObjects.length; i++) {
            var gameObject = that.gameObjects[i];
            gameObject.draw();
        }
    }

    function gameEnd() {
        clearInterval(that.interval);
    }

    function clearCanvas() {
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, width, height);
    }
}