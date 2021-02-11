// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

const maxSubarraySum = (arr,span)=> {
    if(!arr.length){
        return null;
    }
    let maxSum = 0;
    let localSum = 0;
    for(let i = 0;i<span;i++){
        localSum += arr[i];
    }
    maxSum = localSum;
    for(let i = span;i<arr.length;i++){
        localSum = localSum + arr[i] - arr[i-span];
        if(localSum>maxSum){
            maxSum = localSum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4))// 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4))// null