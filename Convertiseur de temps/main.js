const convert = document.getElementById("convert") ;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

convert.addEventListener("click", function() {  //Je crée une function annonyme
    
    let numberOfYears = document.getElementById("numberOfYears").value ;
    console.log(numberOfYears);
   
    let days = numberOfYears * daysInYear;
    console.log(days);
    document.getElementById("resultDays").textContent = days; //Dans la fonction je crée mes variables avec Let et j'affiche le  text à l'endroit prévu avec .Textcontents

    let hours = days * hoursInDay;
    console.log(hours)
    document.getElementById("resultHours").textContent = hours; //Dans la fonction je crée mes variables avec Let et j'affiche le  text à l'endroit prévu avec .Textcontents

    let minutes = hours * minutesInHour;
    console.log(minutes)
    document.getElementById("resultMinutes").textContent = minutes; //Dans la fonction je crée mes variables avec Let et j'affiche le  text à l'endroit prévu avec .Textcontents

    let secondes = minutes * secondsInMinute;
    console.log(secondes)
    document.getElementById("resultSeconds").textContent = secondes; //Dans la fonction je crée mes variables avec Let et j'affiche le  text à l'endroit prévu avec .Textcontents
});