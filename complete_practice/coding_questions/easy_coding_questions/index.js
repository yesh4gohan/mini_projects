



//     factorial - Returns a number that is the factorial of the given number.

//     factorial(0)                        // 1
//     factorial(1)                        // 1
//     factorial(6)                        // 720

//     fib - Returns the nth Fibonacci number.

//     fib(0)                              // 0
//     fib(1)                              // 1
//     fib(10)                             // 55
//     fib(20)                             // 6765

//     isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

//     isSorted([])                        // true
//     isSorted([-Infinity, -5, 0, 3, 9])  // true
//     isSorted([3, 9, -3, 10])            // false

//     filter - Implement the filter function.

//     filter([1, 2, 3, 4], n => n < 3)    // [1, 2]

//     reduce - Implement the reduce function.

//     reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10

//     reverse - Reverses the given string (yes, using the built in reverse function is cheating).

//     reverse('')                         // ''
//     reverse('abcdef')                   // 'fedcba'

//     indexOf - Implement the indexOf function for arrays.

//     indexOf([1, 2, 3], 1)               // 0
//     indexOf([1, 2, 3], 4)               // -1

//     isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).

//     isPalindrome('')                                // true
//     isPalindrome('abcdcba')                         // true
//     isPalindrome('abcd')                            // false
//     isPalindrome('A man a plan a canal Panama')     // true

//     missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.

//     missing([])                         // undefined
//     missing([1, 4, 3])                  // 2
//     missing([2, 3, 4])                  // 1
//     missing([5, 1, 4, 2])               // 3
//     missing([1, 2, 3, 4])               // undefined

//     isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

//     isBalanced('}{')                      // false
//     isBalanced('{{}')                     // false
//     isBalanced('{}{}')                    // true
//     isBalanced('foo { bar { baz } boo }') // true
//     isBalanced('foo { bar { baz }')       // false
//     isBalanced('foo { bar } }')           // false

// Intermediate

//     fib2 - Like the fib function you implemented above, able to handle numbers up to 50 (hint: look up memoization).

//     fib2(0)                               // 0
//     fib2(1)                               // 1
//     fib2(10)                              // 55
//     fib2(50)                              // 12586269025

//     isBalanced2 - Like the isBalanced function you implemented above, but supports 3 types of braces: curly {}, square [], and round (). A string with interleaving braces should return false.

//     isBalanced2('(foo { bar (baz) [boo] })') // true
//     isBalanced2('foo { bar { baz }')         // false
//     isBalanced2('foo { (bar [baz] } )')      // false



//     intersection - Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?

//     intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
//     intersection([1, 5, 4, 2], [7, 12])             // []

//     sort - Implement the sort function to sort an array of numbers in O(N×log(N)) time.

//     sort([])                              // []
//     sort([-4, 1, Infinity, 3, 3, 0])      // [-4, 0, 1, 3, 3, Infinity]

//     includes - Return true or false indicating whether the given number appears in the given sorted array. Can you do it in O(log(N)) time?

//     includes([1, 3, 8, 10], 8)            // true
//     includes([1, 3, 8, 8, 15], 15)        // true
//     includes([1, 3, 8, 10, 15], 9)        // false

//     assignDeep - Like Object.assign, but merges objects deeply. For the sake of simplicity, you can assume that objects can contain only numbers and other objects (and not arrays, functions, etc.).

//     assignDeep({ a: 1 }, {})              // { a: 1 }
//     assignDeep({ a: 1 }, { a: 2 })        // { a: 2 }
//     assignDeep({ a: 1 }, { a: { b: 2 } }) // { a: { b: 2 } }
//     assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 })
//     // { a: { b: { c: 1, d: 2 }}, e: 3 }

//     reduceAsync - Like the reduce you implemented in the Easy section, but each item must be resolved before continuing onto the next.

//     let a = () => Promise.resolve('a')
//     let b = () => Promise.resolve('b')
//     let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
//     await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
//     // ['a', 'b', 'c']
//     await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
//     // ['d', 'a', 'c', 'b']

//     Implement seq in terms of reduceAsync. seq takes an array of functions that return promises, and resolves them one after the other.

//     let a = () => Promise.resolve('a')
//     let b = () => Promise.resolve('b')
//     let c = () => Promise.resolve('c')
//     await seq([a, b, c])                  // ['a', 'b', 'c']
//     await seq([a, c, b])                  // ['a', 'c', 'b']



const isPrime = n => {
    let flag = true;
    if(n<2) flag = false;
    if(n==2) flag = true;
    let sqrt_n = Math.floor(Math.sqrt(n));
    for(let i=3;i<sqrt_n;i+=2){
        if(!(n%i)){
            flag = false;
            break;
        } 
    }
    console.log(flag)
}
//     isPrime - Returns true or false, indicating whether the given number is prime.

    // isPrime(0)                          // false
    // isPrime(1)                          // false
    // isPrime(17)                         // true
    // isPrime(10000000000000)             // false

const factorial = n => {
    if(n<2) return 1;
    return n*factorial(n-1);
}

//     factorial - Returns a number that is the factorial of the given number.

    // console.log(factorial(0))           // 1
    // console.log(factorial(1))           // 1
    // console.log(factorial(6))           // 720

const memomize = (fn) => {
    const cache = {

    }
    return function (...args) {
        if(cache[args]){
            return cache[args]
        }
        const result = fn.apply(this,args);
        return result;
    }
}
const fib = n => {
    if(n===0) return 0;
    if(n===1) return 1;
    return fib(n-1)+fib(n-2);
}

const fibo = memomize(fib);
// console.log(fibo(6))
// console.log(fibo(0))                            // 0
// console.log(fibo(1))                            // 1
// console.log(fibo(10))                           // 55
// console.log(fibo(20))                           // 6765

const isSorted = (arr) => {
    if(!arr.length) return true;
    for(let i =0;i<arr.length-1;i++){
        if(!(arr[i]<arr[i+1])){
            return false;
        }
    }
    return true;
}

//     isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

    // console.log(isSorted([]))                       // true
    // console.log(isSorted([-Infinity, -5, 0, 3, 9])) // true
    // console.log(isSorted([3, 9, -3, 10]))          // false

Array.prototype.my_filter = function(cb){
    let arr = [];
    for(let i = 0;i<this.length;i++){
        if(cb(this[i])) arr.push(this[i]);
    }
    return arr;
}

let arr = [10,11,12,13];

// console.log(arr.filter(each=>(each%2 === 0)))
// console.log(arr.my_filter(each=>(each%2 === 0)))

//filter - Implement the filter function.
//filter([1, 2, 3, 4], n => n < 3)    // [1, 2]

Array.prototype.my_reduce = function(cb,returnItem = null){
    let returnVal = returnItem;
    for(let i = 0;i<this.length;i++){
        returnVal = cb(returnVal,this[i]);
    }
    return returnVal;
}
//     reduce - Implement the reduce function.

//     reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10

// let sum = [1,2,3,4,5].my_reduce((acc,curr)=>(acc+=curr.toString()),"");
// console.log(sum)

const reverse = str1 => {
    let str = str1.split('')
    let mid = Math.floor(str.length/2)
    let len = str.length;
    for(let i = 0;i<=mid;i++){
        let temp = str[i];
        str[i] = str[len-i];
        str[len-i] = temp;
    }
    console.log(str.join(''));
}

//reverse('abcdef')

const isBalanced = str => {
    let brackets = {
        "{":"}",
        "(":")",
        "[":"]"
    }
    let flag = true;
    let arr = [];
    for(let ch in str){
        if(ch === "{" || ch === "(" || ch === "["){
            arr.push(ch)
        }
        else {
            let ele = arr.pop();
            if(ch !== brackets[ele]){
                flag= false;
            }
        }
    }
    if(arr.length) flag = false;
    console.log(flag)
}

//    isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

    // isBalanced('}{')                      // false
    // isBalanced('{{}')                     // false
    // isBalanced('{}{}')                    // true
    // isBalanced('foo { bar { baz } boo }') // true
    // isBalanced('foo { bar { baz }')       // false
    // isBalanced('foo { bar } }')           // false

    //     uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?

//     uniq([])                              // []
//     uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]

const uniq = arr => {
    console.log(arr.filter((each,ind,arr)=>{
        return arr.indexOf(each) === ind
    }))
    
}
//uniq([1, 4, 2, 2,2, 2, 2, 2,  3, 4, 8,2,2])

const intersection = (arr1,arr2) => {
    const arr = []
    for(let i = 0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i])>-1){
            arr.push(arr1[i])
        }
    }
    console.log(arr)
}

    intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
    intersection([1, 5, 4, 2], [7, 12])  


