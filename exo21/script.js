let nombreDeChiffres = parseInt(prompt("Combien de chiffres voulez-vous dans le tableau ?"));

let tableau = [];
for (let i = 0; i < nombreDeChiffres; i++) {
    tableau.push(Math.floor(Math.random() * 50) + 1);
}

for (let i = 0; i < tableau.length; i++) {
    let nombre = tableau[i];
    let type = (nombre % 2 === 0) ? "pair" : "impair";
    console.log(`Le nombre ${nombre} est ${type}.`);
}
