
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const nums = singleDigits(n);
    let sum = 0;
    for(num of nums){
        sum += (num*num);
    }
    console.log(sum)
    if(sum.toString().length === 1){
        if(sum === 1){
            return true;
        }
        return false;
    }
    return isHappy(sum)
};

var singleDigits = (num) => {
    const arr = [];
    while(num){
        arr.unshift(num%10);
        num = Math.floor(num/10);
    }
    return arr;
}  

console.log(isHappy(1111111))

