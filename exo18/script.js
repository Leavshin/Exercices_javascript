function estPalindrome(chaine) {
    let nettoyee = chaine.replace(/\s+/g, '').toLowerCase();
    let inverse = nettoyee.split('').reverse().join('');
    
    return nettoyee === inverse;
}

console.log(estPalindrome("Non")); 
console.log(estPalindrome("touot"));
console.log(estPalindrome("1234321"));
console.log(estPalindrome("pierre"));
console.log(estPalindrome("palindrome"));
