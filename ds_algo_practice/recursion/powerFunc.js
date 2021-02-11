// Write a function which accepts a base an an exponent.  It should return the result of raising the base to that exponent.

// power(2,4) //16
// power(3,2) //9
// power(3,3) //27

const power = (base,rad) => {
    if(rad === 0){
        return 1;
    }
    return base*power(base,rad-1);
}

console.log(power(2,4))
console.log(power(3,2))
console.log(power(3,3))