document.addEventListener('DOMContentLoaded', (event) => {
    class Voiture {
        constructor(marque, modele, vitesse) {
            this.marque = marque;
            this.modele = modele;
            this.vitesse = vitesse;
        }

        accelerer() {
            this.vitesse += 10;
        }

        tourner() {
            this.vitesse -= 5;
        }
    }

    let voiture1 = new Voiture("Bmw", "Serie 1", 80);
    let voiture2 = new Voiture("Mercedes", "GLB", 100);

    voiture1.accelerer();
    voiture1.accelerer();
    voiture1.accelerer();

    voiture2.accelerer();
    voiture2.accelerer();

    voiture2.tourner();
    voiture2.tourner();

    document.getElementById('vitesse-voiture1').textContent = `Vitesse finale de la voiture 1 (${voiture1.marque} ${voiture1.modele}) : ${voiture1.vitesse} km/h`;
    document.getElementById('vitesse-voiture2').textContent = `Vitesse finale de la voiture 2 (${voiture2.marque} ${voiture2.modele}) : ${voiture2.vitesse} km/h`;
});
