const isPrime = (n) => {
    let flag = true;
    if(n<2){
        flag = false;
    }

    const sqrt_n = Math.floor(Math.sqrt(n));
    for(let i=3;i<=sqrt_n;i+=2){
        if(!(n%i)){
            flag = false;
        }
    }
    console.log({flag})
}

isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false
