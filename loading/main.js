const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;
window.onload = window.setTimeout(function(){
    showContent()
}, 3000);
function showContent() {
 content.style.display = "block";
 loading.style.display = "none";
}