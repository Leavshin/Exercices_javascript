// For
let messageFor = "Boucle for :\n";
for (let i = 1; i <= 10; i++) {
    messageFor += "   " + i + "\n";
}
messageFor += "Fin du compte !";

console.log(messageFor);

// While
let messageWhile = "Boucle while :\n";
let j = 1;
while (j <= 10) {
    messageWhile += "   " + j + "\n";
    j++;
}
messageWhile += "Fin du compte !";

console.log(messageWhile);
