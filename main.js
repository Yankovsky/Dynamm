/* Tasks
 * 1) movement by mouse or keyboard or both
 * 2) enemies
 * 3) move draw functions somewhere
 */

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var width = window.innerWidth;
    var height = window.innerHeight;

    ctx.canvas.width = width;
    ctx.canvas.height = height;

    console.log(width, height)

    var mouseX = 0;
    window.document.addEventListener("mousemove", function(event) {
        mouseX = event.clientX;
        //mouseY = event.clientY;
    }, false);

    var player = {x:100, y:100, width:100, height:100,
        update:function() {
            if (player.x > mouseX) {
                player.x -= 5;
            } else if (player.x < mouseX) {
                player.x += 5;
            }
        }};
    var enemies = [{x : 200, y : 200, width : 50, height : 50}];

    function updateGameCycle() {
        update();
        draw()
    }

    var delayBetweenFrames = 40;
    var interval = setInterval(updateGameCycle, delayBetweenFrames);

    function gameEnd() {
        clearInterval(interval);
    }

    function update() {
        player.update();
    }



    function draw() {
        clearCanvas();

        ctx.fillStyle = "black";
        ctx.fillRect(player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);
    }

    function clearCanvas() {
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, width, height);
    }
};