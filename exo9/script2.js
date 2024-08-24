let n = parseInt(prompt("Entrez un entier supérieur à 0 :"));
let message = "";

for (let i = 1; i <= 10; i++) {
    message += "  " + i + " ";
}
message += "\n-----------------------------------------\n";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 10; j++) {
        let product = i * j;
        if (product < 10) {
            message += "  " + product + " "; 
        } else {
            message += " " + product + " "; 
        }
    }
    message += "\n";
}

console.log(message);
