let button = document.querySelector("button");

button.addEventListener("click", function(){

    let boucle = 1;    // Je créé ma variable avec le nombre 1
    let resultat = document.getElementById("result");

    while (boucle <= 100) {   //Je créé une boucle qui va jusqu'a inferieur à 100 

        if (boucle % 15 === 0) { // En gros SI le multiple est de 15 alors on ajoute FizzBuzz
            resultat.innerText = "FizzBuzz";
            console.log("FizzBuzz");
            
        } else if (boucle % 3 === 0)  { // Sinon SI le multiple est de 3 alors on ajoute fizz
            resultat.innerText ="Fizz";
            console.log("Fizz");

        } else if (boucle % 5 === 0) { // Sinon SI le multiple est de 5 alors on ajoute Buzz 
            resultat.innerText = "Buzz";
            console.log("Buzz");
            
        } else {
            resultat.innerText = boucle; //Permet d'afficher la boucle dans la console 
            console.log(boucle);
            }

    boucle++; //Rajoute 1 à chaque fois jusqu'a 100 vue qu'on a fait une boucle <= inferieur à 100
    }
})
