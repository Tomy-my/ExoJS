const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;
document.addEventListener('keydown', function (event) {

    // En arrière
    if (event.code == 'ArrowUp') {
        playerWalk = playerWalk + 1;
        player.style.top = (player.offsetTop - moveSize) + "px";

        if (playerWalk % 2 == 0)
            player.style.backgroundImage = "url('img/backRun.png')";

        else if (playerWalk)
            player.style.backgroundImage = "url('img/back.png')";

    // A droite
    } else if (event.code == 'ArrowRight') {
        playerWalk = playerWalk + 1;
        player.style.left = (player.offsetLeft + moveSize) + "px";

        if (playerWalk % 2 == 0)
            player.style.backgroundImage = "url('img/rightRun.png')";

        else if (playerWalk)
            player.style.backgroundImage = "url('img/right.png')";

    // En avant
    } else if (event.code == 'ArrowDown') {
        playerWalk = playerWalk + 1;
        player.style.top = (player.offsetTop + moveSize) + "px";

        if (playerWalk % 2 == 0)
            player.style.backgroundImage = "url('img/faceRun.png')";

        else if (playerWalk)
            player.style.backgroundImage = "url('img/face.png')";

    // A gauche
    } else if (event.code == 'ArrowLeft') {
        playerWalk = playerWalk + 1;
        player.style.left = (player.offsetLeft - moveSize) + "px";

        if (playerWalk % 2 == 0)
            player.style.backgroundImage = "url('img/leftRun.png')";

        else if (playerWalk)
            player.style.backgroundImage = "url('img/left.png')";
    }
});
