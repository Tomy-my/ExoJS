document.getElementById("input").addEventListener("keyup",
    function (event) {
        if (event.getModifierState("CapsLock")) {
            document.getElementById("warning").style.display = "block";
        }
        else {
            document.getElementById("warning").style.display = "none";
        }
         if (event.getModifierState("NumLock")) {
            document.getElementById("warning2").style.display = "none";
        }
        else{
            document.getElementById("warning2").style.display = "block";
        }
    });



