function afficherMenu() {
    console.log("\nMenu :");
    console.log("1 : Ajouter ou modifier un contact");
    console.log("2 : Afficher les contacts");
    console.log("3 : Trier les contacts par ordre alphabétique");
    console.log("4 : Mélanger les contacts aléatoirement");
    console.log("5 : Supprimer un contact");
    console.log("6 : Rechercher un contact");
    console.log("7 : Quitter");
}

function ajouterOuModifierContact(contacts) {
    let nom = prompt("Entrez le nom complet du contact à ajouter/modifier :");
    if (contacts.includes(nom)) {
        console.log("Ce contact existe déjà.");
    } else {
        contacts.push(nom);
        console.log("Contact ajouté.");
    }
}

function afficherContacts(contacts) {
    if (contacts.length === 0) {
        console.log("Aucun contact à afficher.");
    } else {
        console.log("Liste des contacts :");
        contacts.forEach(contact => console.log(contact));
    }
}

function trierContacts(contacts) {
    contacts.sort();
    console.log("Contacts triés par ordre alphabétique.");
}

function melangerContacts(contacts) {
    for (let i = contacts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [contacts[i], contacts[j]] = [contacts[j], contacts[i]];
    }
    console.log("Contacts mélangés aléatoirement.");
}

function supprimerContact(contacts) {
    let nom = prompt("Entrez le nom complet du contact à supprimer :");
    const index = contacts.indexOf(nom);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log("Contact supprimé.");
    } else {
        console.log("Contact non trouvé.");
    }
}

function rechercherContact(contacts) {
    let recherche = prompt("Entrez une partie du nom à rechercher :");
    let resultats = contacts.filter(contact => contact.toLowerCase().includes(recherche.toLowerCase()));
    if (resultats.length === 0) {
        console.log("Aucun contact trouvé.");
    } else {
        console.log("Contacts trouvés :");
        resultats.forEach(contact => console.log(contact));
    }
}

function main() {
    let contacts = [];
    let nombreDeContacts = parseInt(prompt("Combien de contacts voulez-vous saisir ?"));

    for (let i = 0; i < nombreDeContacts; i++) {
        let contact = prompt("Entrez le nom complet du contact :");
        if (contacts.includes(contact)) {
            console.log("Ce contact existe déjà.");
        } else {
            contacts.push(contact);
        }
    }

    let choix;
    do {
        afficherMenu();
        choix = parseInt(prompt("Votre choix :"));
        switch (choix) {
            case 1:
                ajouterOuModifierContact(contacts);
                break;
            case 2:
                afficherContacts(contacts);
                break;
            case 3:
                trierContacts(contacts);
                break;
            case 4:
                melangerContacts(contacts);
                break;
            case 5:
                supprimerContact(contacts);
                break;
            case 6:
                rechercherContact(contacts);
                break;
            case 7:
                console.log("Programme terminé.");
                break;
            default:
                console.log("Choix invalide.");
        }
    } while (choix !== 7);
}

main();
