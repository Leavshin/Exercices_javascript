let temp = parseFloat(prompt("Veuillez saisir la température :"));
let etatEau;

if (temp < 0) {
    etatEau = "SOLIDE";
} else if (temp <= 100) {
    etatEau = "LIQUIDE";
} else {
    etatEau = "GAZEUX";
}

console.log("À " + temp + "°C, l'eau est à l'état : " + etatEau);
