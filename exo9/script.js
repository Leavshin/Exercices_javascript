let n = parseInt(prompt("Entrez un entier supérieur à 0 :"));
let message = "";

for (let i = 1; i <= n; i++) {
    message += "Table de " + i + " :\n";
    for (let j = 1; j <= 10; j++) {
        message += i + " x " + j + " = " + (i * j) + "\n";
    }
    message += "\n";
}

console.log(message);

