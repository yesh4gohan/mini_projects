const glob_var = "global_var";
const parentFunc = () => {
    const parent_var = "parent_var";
    const parentDummyFunc = () => {
        return "parent_dummy"
    }
    return (function(){
        console.log({
            glob_var,
            parent_var,
            parent_dmmy_func:parentDummyFunc()
        })
    })();
}

//parentFunc();


const mul = (a) => {
    return (b) => {
        return (c) => {
            return a*b*c;
        }
    }
}

//console.log(mul(1)(2)(3))

var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList = []; // Empty the array 
console.log(arrayList); // Output ['a','b','c','d','e','f']