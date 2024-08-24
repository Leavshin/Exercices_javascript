let nbLignes = parseInt(prompt("Entrez la hauteur du triangle : "));

if (!isNaN(nbLignes) && nbLignes > 0) {
    let etoiles = "*";
    let espaces = " ";
    let nbEspaces = nbLignes - 1;

    for(let ligne = 1; ligne <= nbLignes; ligne++) {
        console.log(espaces.repeat(nbEspaces) + etoiles);
        etoiles += "**";
        nbEspaces--;
    }
}
