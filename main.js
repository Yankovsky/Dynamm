window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var gameEnd = false;

    while (!gameEnd) {
        update();
        draw()
    }
}