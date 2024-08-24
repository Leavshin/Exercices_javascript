function obtenirNotes(mode) {
    let notes = [];
    if (mode === 1) { 
        let nombreDeNotes = parseInt(prompt("Combien de notes ?"));
        for (let i = 0; i < nombreDeNotes; i++) {
            let note = parseFloat(prompt("Veuillez entrer une note entre 0 et 20 compris :"));
            while (note < 0 || note > 20 || isNaN(note)) {
                note = parseFloat(prompt("ERREUR, veuillez réessayer :"));
            }
            notes.push(note);
        }
    } else if (mode === 2) { 
        while (true) {
            let note = parseFloat(prompt("Veuillez entrer une note entre 0 et 20 compris (ou une note négative pour terminer) :"));
            if (note < 0) break;
            while (note < 0 || note > 20 || isNaN(note)) {
                note = parseFloat(prompt("ERREUR, veuillez réessayer :"));
                if (note < 0) break;
            }
            if (note < 0) break;
            notes.push(note);
        }
    }
    return notes;
}

function afficherStatistiques(notes) {
    if (notes.length === 0) {
        console.log("Aucune note saisie.");
        return;
    }
    let max = Math.max(...notes);
    let min = Math.min(...notes);
    let somme = notes.reduce((acc, note) => acc + note, 0);
    let moyenne = somme / notes.length;
    
    console.log(`La note maximale est de ${max.toFixed(2)} / 20`);
    console.log(`La note minimale est de ${min.toFixed(2)} / 20`);
    console.log(`La moyenne est de ${moyenne.toFixed(1)} / 20`);
}

let mode = parseInt(prompt("Choisir un mode de saisie:\n1 : Saisie fixe\n2 : Saisie jusqu'à note négative\n\nVotre choix :"));
let notes = obtenirNotes(mode);
console.log("Fin de Saisie !");
afficherStatistiques(notes);
