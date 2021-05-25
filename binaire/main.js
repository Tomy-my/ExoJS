const convert = document.getElementById("convert") ;
convert.addEventListener("click", function() {

    let code =document.getElementById("msgToCode").value;
    let crypted =document.getElementById("crypted");
    
    crypted.value = "";
    
    for (i=0; i < code.length; i++) {
     	crypted.value +=code[i].charCodeAt(0).toString(2) + " ";
    }
    
    document.getElementById("crypted").textContent = crypted.value;
});
