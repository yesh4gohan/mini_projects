var maxProfit = function(prices) {
    let buy = prices[0];
    let maxProfit = 0;
    for(let i = 1;i<prices.length;i++){
        let profit = prices[i]-buy;
        if(profit>maxProfit){
            maxProfit = profit;
        }
        
    }
};

//[1,2,3,4,5]

var moveZeroes = function(nums) {
    let i = 0;
    while(i<nums.length){
        if(nums[i] === 0){
            nums.splice(i,1);
            nums.push(0);
        }
        else {
            i++
        }
    }
};

var twoSum = function(nums, target) {
    // nums.sort((a,b)=>(a>b))
    // let len = nums.length;
    // for(let i = 0,j=len;i<j;){
    //     console.log(nums[i])
    //     let sum = Number(nums[i])+Number(nums[j]);
    //     if(sum > target){
    //         j--;
    //     }
    //     else if(sum<target){
    //         i++
    //     }
    //     else {
    //         return [i,j]
    //     }
    // }
    const pos_hash = {}
    for(let i = 0;i<nums.length;i++){
        pos_hash[i] = nums[i]; 
    }
    
    for(let i = 0;i<nums.length;i++){
        const diff = target - nums[i];
        if(pos_hash.hasOwnProperty(diff) && pos_hash[diff] === diff){
            return [i,posh_hash[diff]]
        }
    }
};

twoSum( [2, 7, 11, 15],9)