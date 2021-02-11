const factorial = n => {
    if(n<2) return 1;
    return n*factorial(n-1);
}
console.log(factorial(40))

const memoize = cb => {
    const cache = {};
    return function(arg){
        if(!cache[arg]){
            cache[arg] = cb(arg)
            return cache[arg]
        }
        else {
            return cache[arg]
        }
    }
}

const memoizedFact = memoize(factorial);

//console.log(memoizedFact(40))
