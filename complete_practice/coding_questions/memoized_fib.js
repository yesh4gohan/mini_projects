const memoize = (cb) => {
    const cache = {}
    return function(...args) {
        if(cache[args]) return cache[args];
        cache[args] = cb.apply(undefined,args);
        return cache[args]
    }
}

const fib = n => {
    if (n < 2) {
        return n;
      }
    
      return fib(n - 1) + fib(n - 2);
}

const memoized_fib = memoize(fib)
console.log(memoized_fib(6))