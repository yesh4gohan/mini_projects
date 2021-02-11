
var maxSubArray = function(nums) {
    let sum = Number.MIN_SAFE_INTEGER;


    for(let i = 0;i<nums.length;i++){
        let temp_arr = nums.slice(i,nums.length);
        //console.log(temp_arr)
        let localSum = summer(temp_arr)
        if(localSum>sum){
            sum = localSum;
        }
        temp_arr
    }
    return sum
};


var summer = arr => {
    
    return arr.reduce((acc,curr)=>(acc += curr),0)
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))