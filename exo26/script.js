let dogs = [
    {
        name: "Amy",
        breed: "Border Collie",
        age: 11
    },
    {
        name: "Roxy",
        breed: "Border Collie",
        age: 8
    }
];

// Menu déroulant
function populateDogSelect() {
    const select = document.getElementById('dog-select');
    select.innerHTML = '<option value="0">Sélectionnez un chien</option>'; // Réinitialiser les options
    dogs.forEach((dog, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = dog.name;
        select.appendChild(option);
    });
}

// Détails chien
document.getElementById('dog-select').addEventListener('change', function() {
    const selectedDogIndex = this.value;
    const output = document.getElementById('selectOutput');
    if (selectedDogIndex > 0) {
        const dog = dogs[selectedDogIndex];
        output.innerHTML = `<p>Nom: ${dog.name}</p><p>Race: ${dog.breed}</p><p>Âge: ${dog.age} ans</p>`;
    } else {
        output.innerHTML = '';
    }
});

// Nouveau chien
document.getElementById('btn-submit').addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.getElementById('dog-name').value;
    const breed = document.getElementById('dog-breed').value;
    const age = document.getElementById('dog-age').value;

    if (name && breed && age) {
        dogs.push({ name, breed, age: parseInt(age) });
        populateDogSelect();
    }
});

// Initialiser
populateDogSelect();
