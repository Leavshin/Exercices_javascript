let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
];

for (const etudiant of etudiants) {
    console.log("##### Début Etudiant #####");
    console.log(`Étudiant : ${etudiant.prenom} ${etudiant.nom}`);
    
    let somme = 0;
    let nbrNote = 0;

    for (const matiere in etudiant.matieres) {
        console.log(`${matiere} : ${etudiant.matieres[matiere]}/20`);
        somme += etudiant.matieres[matiere];
        nbrNote++;
    }

    let moyenne = nbrNote > 0 ? somme / nbrNote : 0;
    console.log(`La moyenne est de : ${moyenne.toFixed(2)}`);
    console.log("##### Fin Etudiant #####\n");
}
