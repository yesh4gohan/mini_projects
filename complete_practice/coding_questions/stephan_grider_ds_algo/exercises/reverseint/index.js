// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let rem=0;
    let rev = 0;
    let isPos = n>0;
    let num = Math.abs(n);
    if(n === 0){
        return n;
    }
    while(num>0){
        rem = num%10;
        rev = rev*10;
        rev += rem;
        num = Math.floor(num/10);
    }
    return isPos?rev:-rev;
}

module.exports = reverseInt;
