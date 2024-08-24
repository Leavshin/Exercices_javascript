let message = "Table des matières :\n";

for (let chapitre = 1; chapitre <= 3; chapitre++) {
    message += "    Chapitre " + chapitre + ":\n";
    
    for (let partie = 1; partie <= 3; partie++) {
        message += "        - partie " + chapitre + "." + partie + "\n";
    }
}

console.log(message);
