const smallestSubArray = (arr,finsum) => {
    let start = 0;
    let end = 0;
    let len = Infinity;
    let sum = 0;
    while(start<arr.length){
        if(sum<finsum && end<arr.length){
            sum += arr[end];
            end++;
        }
        else if(sum>=finsum){
            len = Math.min(len,end-start);
            sum -= arr[start];
            start++;
        }
        else {
            break;
        }
    }
    return len;
}

console.log(smallestSubArray([2, 1, 6, 5, 4], 9));