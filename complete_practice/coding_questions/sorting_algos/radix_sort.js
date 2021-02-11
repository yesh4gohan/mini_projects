
const getDigitCount = num => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(num)+1);
}

const getDigitAtIndex = (num,ind) => {
    return Math.floor(Math.abs(num)/Math.pow(10,ind)%10);
}
const getMaxDigitCount = arr => {
    const countArr = [];
    arr.forEach(element => {
        countArr.push(getDigitCount(element))
    });
    return Math.max(...countArr);
}

const radixSort = nums => {
    const maxDigitCount = getMaxDigitCount(nums);
    for(let i=0;i<maxDigitCount;i++){
        let bucket = Array.from({length:10},()=>[]);
        for(let j=0;j<nums.length;j++){
            let digitAtIndex = getDigitAtIndex(nums[j],i);
            bucket[digitAtIndex].push(nums[j]);
        }
        nums = [].concat(...bucket);
    }
    return nums;
}


console.log(radixSort([10,5,11,998,10000,64,8888]))

