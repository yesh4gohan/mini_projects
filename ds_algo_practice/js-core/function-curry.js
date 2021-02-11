//fn(1)(2)(3)(4)....()

let sum = 0;
const summer = param1 => {
    
    sum += param1;
    return function(param2){
        if(param2){
            return summer(param2)
        }
        return sum;
    };
}
//console.log(summer(1)(2)(3)(4)(5)())

//fn(1)(2)(3)(4)....()

let sum1 = 0;

const summer1 = param1 => {
    sum1 += param1;
    return function(param2){
        if(param2){
            return summer1(param2)
        }
        return sum1
    }
}
console.log(summer1(1)(2)(3)(4)(5)())