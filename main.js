window.document.addEventListener("mousemove", function(event) {
/*    myClientX = event.clientX;
    myClientY = event.clientY;*/
}, false);

/* Tasks
 * 1) movement by mouse or keyboard or both
 * 2) enemies
 * 3) move draw functions somewhere
 */

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var player = {x : 100, y : 100, width : 100, height : 100};
    var enemies = [{x : 200, y : 200, width : 50, height : 50}];

    function updateGameCycle() {
        update();
        draw()
    }

    var interval = setInterval(updateGameCycle, 100);

    function gameEnd() {
        clearInterval(interval);
    }

    function update() {

        player.update();
        checkCollision
        player.x += 5;
    }

    function draw() {
        clearCanvas();

        ctx.fillStyle = "black";
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    function clearCanvas() {
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, 600, 600);
    }
};