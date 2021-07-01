function balanceScale() {
    let balance = document.getElementById("balanceIcon");

    balance.innetHTML = "&#xf24e;";

    setTimeout(function () {
        balance.innerHTML = "&#xf515;";
    }, 1000);
    
    setTimeout(function () {
        balance.innerHTML = "&#xf516;";
    }, 2000);
}
balanceScale();
setInterval(balanceScale, 3000);


function cadenaIcon() {
    let lock = document.getElementById("balanceIcon2");
    console.log(lock);
    lock.innetHTML = "&#xf3c1;";

    setTimeout(function () {
        lock.innerHTML = "&#xf023;";
    }, 1000);

    setTimeout(function () {
        lock.innerHTML = "&#xf3c1;";
    }, 2000);
}
cadenaIcon();
setInterval(cadenaIcon, 3000);



function batterieLoading() {
    let batterie = document.getElementById("balanceIcon3");

    batterie.innerHTML = "&#xf244;";

    setTimeout(function () {
        batterie.innerHTML = "&#xf243;";
    }, 1000);

    setTimeout(function () {
        batterie.innerHTML = "&#xf242;";
    }, 2000);

    setTimeout(function () {
        batterie.innerHTML = "&#xf241;";
    }, 3000);

    setTimeout(function () {
        batterie.innerHTML = "&#xf240;";
    }, 4000);
}
batterieLoading();
setInterval(batterieLoading, 5000);


function emotion() {
    let bonhomme = document.getElementById("balanceIcon4");
    
    bonhomme.innetHTML = "&#xf5b8;";

    setTimeout(function () {
        bonhomme.innerHTML = "&#xf119;";
    }, 1000);

    setTimeout(function () {
        bonhomme.innerHTML = "&#xf5b8;";
    }, 2000);
}
emotion();
setInterval(emotion, 3000);