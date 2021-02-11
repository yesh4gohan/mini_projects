const countPrimes = n => {
    if(n<2) return [];
    if(n===2) return [2]
    const arr = [2];
    for(let i=3;i<n;i+=2){
        if(checkIfPrime(i)){
            arr.push(i)
        }
    }
    return arr;
}

const checkIfPrime = n => {
    let sqrt_n = Math.ceil(Math.sqrt(n))
    for(let j = 2;j<=sqrt_n;j++){
        if(!(n%j)){
            return false;
        }
    }
    return true;
}

console.log(countPrimes(15))