let age = parseInt(prompt("Veuillez saisir votre âge :"));
let salaire = parseInt(prompt("Veuillez saisir le salaire demandé (en euros) :"));
let experience = parseInt(prompt("Veuillez saisir votre nombre d'années d'expérience :"));

let message = "Votre candidature est valide.";

if (age < 30) {
    message = "Vous devez avoir au moins 30 ans pour postuler.";
}
if (salaire > 40000) {
    message = "Le salaire demandé ne doit pas dépasser 40 000 euros.";
}
if (experience < 5) {
    message = "Vous devez avoir au moins 5 ans d'expérience.";
}

console.log(message);
