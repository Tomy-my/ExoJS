let buttonAll = document.querySelector(".btn_all");
let buttonSummer = document.querySelector(".btn_summer");
let buttonAutumn = document.querySelector(".btn_autumn");
let buttonSpring = document.querySelector(".btn_spring");
let buttonWinter= document.querySelector(".btn_winter");

//summer
let summer1 = document.querySelector(".filterDivSummer1");
let summer2 = document.querySelector(".filterDivSummer2");
let summer3 = document.querySelector(".filterDivSummer3");

//autumn
let autumn1 = document.querySelector(".filterDivAutumn1");
let autumn2 = document.querySelector(".filterDivAutumn2");
let autumn3 = document.querySelector(".filterDivAutumn3");

//spring
let spring1 = document.querySelector(".filterDivSpring1");
let spring2 = document.querySelector(".filterDivSpring2");
let spring3 = document.querySelector(".filterDivSpring3");

//winter
let winter1 = document.querySelector(".filterDivWinter1");
let winter2 = document.querySelector(".filterDivWinter2");
let winter3 = document.querySelector(".filterDivWinter3");

buttonAll.addEventListener("click", function(){
    summer1.style.display = "block";
    summer2.style.display = "block";
    summer3.style.display = "block";

    autumn1.style.display = "block";
    autumn2.style.display = "block";
    autumn3.style.display = "block";

    spring1.style.display = "block";
    spring2.style.display = "block";
    spring3.style.display = "block";

    winter1.style.display = "block";
    winter2.style.display = "block";
    winter3.style.display = "block";
})

buttonSummer.addEventListener("click", function(){
    summer1.style.display = "block";
    summer2.style.display = "block";
    summer3.style.display = "block";

    autumn1.style.display = "none";
    autumn2.style.display = "none";
    autumn3.style.display = "none";

    spring1.style.display = "none";
    spring2.style.display = "none";
    spring3.style.display = "none";

    winter1.style.display = "none";
    winter2.style.display = "none";
    winter3.style.display = "none";

})

buttonAutumn.addEventListener("click", function(){
    summer1.style.display = "none";
    summer2.style.display = "none";
    summer3.style.display = "none";

    autumn1.style.display = "block";
    autumn2.style.display = "block";
    autumn3.style.display = "block";

    spring1.style.display = "none";
    spring2.style.display = "none";
    spring3.style.display = "none";

    winter1.style.display = "none";
    winter2.style.display = "none";
    winter3.style.display = "none";

})

buttonSpring.addEventListener("click", function(){
    summer1.style.display = "none";
    summer2.style.display = "none";
    summer3.style.display = "none";

    autumn1.style.display = "none";
    autumn2.style.display = "none";
    autumn3.style.display = "none";

    spring1.style.display = "block";
    spring2.style.display = "block";
    spring3.style.display = "block";

    winter1.style.display = "none";
    winter2.style.display = "none";
    winter3.style.display = "none";
})

buttonWinter.addEventListener("click", function(){
    summer1.style.display = "none";
    summer2.style.display = "none";
    summer3.style.display = "none";

    autumn1.style.display = "none";
    autumn2.style.display = "none";
    autumn3.style.display = "none";

    spring1.style.display = "none";
    spring2.style.display = "none";
    spring3.style.display = "none";

    winter1.style.display = "block";
    winter2.style.display = "block";
    winter3.style.display = "block";
})













































// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }