const btn = document.getElementById('btn');
var result = document.getElementById('result');

btn.addEventListener("click",headsOrTails); //Quand je clique sur BTN ça active la function headsOrtails

function headsOrTails(){ // Création de la function headOrTails

    let resultat = Math.floor(Math.random() * 2); // Je créé une variable qui récupere le resultat  ||| Math.floor arrondie à l'inferieur du nombre ramdom (Math.random) SOUCIS Math randome exclu le 1 entre 0 & 1 donc je multplie par deux le resultat + l'arrondie à l'inferieur et alors cela m'affiche 1

    if (resultat == 0){  // SI dans la variable la vérification " == " et donc == à 0 alors tu affiche dans la variable result le mot YO 
        result.innerText = "Pile";
        console.log(resultat);
    }

    else if (resultat == 1){ // Parcontre (SInon si) dans la variable la vérification " == " et donc == à 1 alors tu affiche dans la variable result le mot WESH 
        result.innerText = "Face"; 
        console.log(resultat);
    }

}
