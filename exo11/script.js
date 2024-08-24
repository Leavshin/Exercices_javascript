let epaisseur = 0.1;
let cible = 400 * 1000; 
let pliages = 0;

while (epaisseur <= cible) {
    epaisseur *= 2;
    pliages++;
}

console.log(`Il faut plier la feuille ${pliages} fois pour que l'épaisseur dépasse 400m.`);

// Inverse 
let epaisseurInverse = 400 * 1000;
let depliages = 0;
let cibleInverse = 0.1; 

while (epaisseurInverse > cibleInverse) {
    epaisseurInverse /= 2;
    depliages++;
}

console.log(`Il faut déplier la feuille ${depliages} fois pour que l'épaisseur redescende à 0.1mm.`);
