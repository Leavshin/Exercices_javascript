let n = parseInt(prompt("Saisir un nombre entier : "));
console.log(`Les sommes consécutives pour ${n} sont :`);

for (let start = 1; start < n; start++) {
    let sum = 0;
    for (let num = start; sum < n; num++) {
        sum += num;
        if (sum === n) {
            let sequence = [];
            for (let i = start; i <= num; i++) {
                sequence.push(i);
            }
            console.log(`${n} = ${sequence.join("+")}`);
            break;
        }
    }
}
