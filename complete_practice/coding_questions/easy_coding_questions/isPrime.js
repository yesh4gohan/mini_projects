const isPrime = n => {
    if(n<2) return false;
    if(n===2)return true;   
    let sqrt_n = Math.floor(Math.sqrt(n));
    for(let i=2;i<sqrt_n;i++){
        console.log(i)
        if(!(n%i)){
            return false;
        }
    }

    return true;
}

console.log(isPrime(13))