/* Tasks
 * 1) movement by mouse or keyboard or both
 * 2) enemies
 * 3) move draw functions somewhere
 */

window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var width = window.innerWidth;
    var height = window.innerHeight;

    ctx.canvas.width = width;
    ctx.canvas.height = height;

    console.log(width, height)

    var mouseX = 0;

    var ticks = 0;
    window.document.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        //mouseY = event.clientY;
    }, false);
    var playerBullets = [];
    function shoot(x, y) {
        playerBullets.push({x : x, y : y, width : 10, height: 10});
    }

    var player = {x:100, y:(height - 100), width:100, height:100, speed:20,
        update:function () {
            if (Math.abs(mouseX - player.x) < player.speed) {
                player.x = mouseX;
            } else if (player.x > mouseX) {
                player.x -= player.speed;
            } else if (player.x < mouseX) {
                player.x += player.speed;
            }
            if (ticks % 15 == 0) {
                shoot(player.x, player.y);
            }
        }};
    var enemies = [
        {x:200, y:200, width:50, height:50}
    ];

    function updateGameCycle() {
        update();
        draw()
    }

    var delayBetweenFrames = 30;
    var interval = setInterval(updateGameCycle, delayBetweenFrames);

    function gameEnd() {
        clearInterval(interval);
    }

    function update() {
        player.update();
        for (var i = 0; i < playerBullets.length; i++) {
            playerBullets[i].y -= 5;
        }
        ticks++;
    }


    function draw() {
        clearCanvas();

        ctx.fillStyle = "black";
        ctx.fillRect(player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);

        for (var i = 0; i < playerBullets.length; i++) {
            var bullet = playerBullets[i];
            ctx.fillRect(bullet.x - bullet.width / 2, bullet.y - bullet.height / 2, bullet.width, bullet.height);
        }
    }

    function clearCanvas() {
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, width, height);
    }
};