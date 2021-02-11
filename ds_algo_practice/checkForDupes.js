function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    let obj = {};
    for(let term of args){
        if(obj[term]){
            return true;
        }
        else{
            obj[term] = 1;
        }
    }
    return false;
  }

console.log(areThereDuplicates(1,2,3,4,4))
console.log(areThereDuplicates('1','2','3','4'))
console.log(areThereDuplicates('1','2','3','4','4'))
console.log(areThereDuplicates(1,1))