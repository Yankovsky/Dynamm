window.document.addEventListener("mousemove", function(event) {
/*    myClientX = event.clientX;
    myClientY = event.clientY;*/
}, false);

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var player = {x : 100, y : 100};

    function updateGameCycle() {
        update();
        draw()
    }

    var interval = setInterval(updateGameCycle, 100);

    function gameEnd() {
        clearInterval(interval);
    }

    function update() {
        player.x += 5;
    }

    function draw() {
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, 600, 600);

        ctx.fillStyle = "black";
        ctx.fillRect(player.x, player.y, 100, 100);
    }
};