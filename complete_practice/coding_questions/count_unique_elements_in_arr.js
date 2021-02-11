const countUniqueValues = arr => {
    if(!arr.length) return 0;
    let i,j;
    for(i=0,j=1;j<arr.length&&i<j;){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
            j++;
        }
        else {
            j++;
        }
    }
    return i+1;
}
console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([]))// 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4