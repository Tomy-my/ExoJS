let boucle = 1;    // Je créé ma variable avec le nombre 1

while (boucle <= 100) {   //Je créé une boucle qui va jusqu'a inferieur à 100 

     if (boucle % 15 === 0) { // En gros SI le multiple est de 15 alors on ajoute FizzBuzz
        console.log("fizzBuzz");
        
        } else if (boucle % 3 === 0)  { // Sinon SI le multiple est de 3 alors on ajoute fizz
            console.log("Fizz");

            } else if (boucle % 5 === 0) { // Sinon SI le multiple est de 5 alors on ajoute Buzz 
                console.log("Buzz");
            
                } else {
                    console.log(boucle); //Permet d'afficher la boucle dans la console 
                    }
boucle++; //Rajoute 1 à chaque fois jusqu'a 100 vue qu'on a fait une boucle <= inferieur à 100
}

