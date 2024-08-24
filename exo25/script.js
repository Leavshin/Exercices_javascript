let nbNotes = Number(prompt("Combien de notes allez-vous saisir ?"));
let maxNote = 0;
let minNote = 20;
let sommeNotes = 0;

let notes = [];

for (let i = 0; i < nbNotes; i++) {
    let note = Number(prompt(`Entrez la note ${i + 1} :`));
    
    if (note < 0 || note > 20 || isNaN(note)) {
        alert("Note invalide. Entrez une note entre 0 et 20.");
        i--; 
    } else {
        notes.push(note);
        sommeNotes += note;
        if (note > maxNote) maxNote = note;
        if (note < minNote) minNote = note;
    }
}

let moyenne = sommeNotes / nbNotes;

let affichage = `
    <p>Nombre total de notes : ${nbNotes}</p>
    <ul>
        <li>La meilleure note est ${maxNote}/20</li>
        <li>La moins bonne note est ${minNote}/20</li>
        <li>La moyenne des notes est ${moyenne.toFixed(2)}/20</li>
    </ul>
`;

document.querySelector(".result").innerHTML = affichage;
