let password = document.getElementById("password") ;
let checkPassword = document.getElementById("checkpassword") ;

let msg = document.getElementById("message") ;

let minuscule = document.getElementById("minuscule");
let majuscule = document.getElementById("majuscule");
let nombre = document.getElementById("nombre");
let special = document.getElementById("special");
let taille = document.getElementById("taille");

password.addEventListener('keyup', function(){
    
    let nombreMinuscule = /[a-z]/g;
    if(password.value.match(nombreMinuscule)) {  
      minuscule.classList.remove("invalid");
      minuscule.classList.add("valid");
    } else {
      minuscule.classList.remove("valid");
      minuscule.classList.add("invalid");
    }

    let nombreMajuscule = /[A-Z]/g;
    if(password.value.match(nombreMajuscule)) {  
        majuscule.classList.remove("invalid");
        majuscule.classList.add("valid");
    } else {
        majuscule.classList.remove("valid");
        majuscule.classList.add("invalid");
    }

    let nombres = /[0-9]/g;
    if(password.value.match(nombres)) {  
        nombre.classList.remove("invalid");
        nombre.classList.add("valid");
    } else {
        nombre.classList.remove("valid");
        nombre.classList.add("invalid");
    }

    let speciaux = /[^a-zA-Z\d]/g;
    if(password.value.match(speciaux)) {  
        special.classList.remove("invalid");
        special.classList.add("valid");
    } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
    }
    

    if(password.value.length >= 8) {
        taille.classList.remove("invalid");
        taille.classList.add("valid");
    } else {
        taille.classList.remove("valid");
        taille.classList.add("invalid");
    }

})

checkPassword.addEventListener('keyup', function() {
    

    if (password.value === checkPassword.value) {
        msg.style.color="green";
        msg.innerHTML="Le mot de passe correspond";
    }

    else{
        msg.style.color="red";
        msg.innerHTML="Le mot de passe ne correspond pas";
    }


})