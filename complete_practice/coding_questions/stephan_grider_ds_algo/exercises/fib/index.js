// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3



function memoize(cb){
    const cache = {}
    return function(){
        console.log({arg:arguments[0]})
        let args = arguments[0]
        if(cache[args]){
            return cache[args];
        }
        cache[args] = cb.call(this,args);
        return cache[args];
    }
}
function normalFib(n){
    if(n<2) return n;
    return fib(n-1)+fib(n-2);
}
const fib = memoize(normalFib);


module.exports = fib;
