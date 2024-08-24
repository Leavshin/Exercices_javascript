let populationInitiale = parseFloat(prompt("Saisir la population initiale : "));
let tauxAccroissement = parseFloat(prompt("Saisir le taux d'accroissement (%) : ")) / 100;
let populationVisee = parseFloat(prompt("Saisir la population visée : "));

let annee = 0;
let population = populationInitiale;

while (population < populationVisee) {
    population += population * tauxAccroissement;
    annee++;
}

console.log(`La population dépasse la population visée à l'année ${annee} (${Math.round(population)} habitants).`);
