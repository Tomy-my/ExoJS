const buttonCopy = document.getElementById("button-copy");
let text = document.getElementById("copytext");
buttonCopy.addEventListener("click", function () {
    text.select();
    document.execCommand("copy");
});





// function myFunction() {
//     var copyText = document.getElementById("myInput");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//   }