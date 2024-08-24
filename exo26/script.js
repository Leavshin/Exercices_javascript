let myDogs = [
    {
        name: "Rantanplan",
        breed: "Berger texan",
        age: 7
    },
    {
        name: "Rex",
        breed: "Berger allemand",
        age: 5
    }
];

// Récupération des éléments DOM
const select = document.getElementById('dog-select');
const btn = document.getElementById('btn-submit');
const output = document.getElementById('selectOutput');

// Fonction pour mettre à jour le menu déroulant
const refreshDogSelect = () => {
    select.innerHTML = '<option value="0">Sélectionnez un chien</option>';
    myDogs.forEach((chien, index) => {
        let newOption = document.createElement('option');
        newOption.value = index + 1;
        newOption.textContent = chien.name;
        select.appendChild(newOption);
    });
};

// Événement pour afficher les détails du chien sélectionné
select.addEventListener("change", () => {
    let dogId = select.value - 1;
    if (dogId >= 0 && dogId < myDogs.length) {
        let dog = myDogs[dogId];
        output.innerHTML = `
            <h5>Détails du Chien</h5>
            <p>ID : ${dogId + 1}</p>
            <p>Nom : ${dog.name}</p>
            <p>Âge : ${dog.age} ans</p>
            <p>Race : ${dog.breed}</p>
        `;
    } else {
        output.textContent = "";
    }
});

// Événement pour ajouter un nouveau chien
btn.addEventListener("click", () => {
    let dogName = document.getElementById("dog-name").value;
    let dogBreed = document.getElementById("dog-breed").value;
    let dogAge = parseInt(document.getElementById("dog-age").value, 10);

    if (dogName && dogBreed && !isNaN(dogAge)) {
        myDogs.push({
            name: dogName,
            breed: dogBreed,
            age: dogAge
        });

        // Réinitialisation du formulaire
        document.getElementById("dog-name").value = "";
        document.getElementById("dog-breed").value = "";
        document.getElementById("dog-age").value = "";

        // Mise à jour du menu déroulant
        refreshDogSelect();
    } else {
        alert("Veuillez entrer des informations valides pour tous les champs.");
    }
});

refreshDogSelect();
