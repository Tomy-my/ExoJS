document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation);
    detectOrientation();
});
function detectOrientation() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (window.innerHeight > window.innerWidth) {
            document.getElementById("rotateScreen").style.display = "block";
            document.getElementById("dispplayContent").style.display = "none";

        } else {
            document.getElementById("rotateScreen").style.display = "none";
            document.getElementById("displayContent").style.display = "block"
        }
    }
}

