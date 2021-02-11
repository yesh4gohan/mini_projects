// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

const countUniqueValues = arr => {
    if(arr.length === 0){
        return 0;
    }
    let i;
    for( i = 0,j = 1; j<arr.length && i<j;){
        if(arr[j]!==arr[i]){
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

    // console.log(countUniqueValues([1,1,1,1,1,2])) // 2
    // console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
    // console.log(countUniqueValues([]))// 0
    // console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

const filterUniqueValues = arr => {
    const arrObj = objectCreator(arr);
    return Object.keys(arrObj).map(each=>(parseInt(each)));
}

const objectCreator = arr => {
    const strObj = {};
    for(let ch of arr){
        strObj[ch]?strObj[ch]+=1:strObj[ch]=1;
    }
    return strObj;
}


console.log(filterUniqueValues([1,1,1,1,1,2])) // 2
console.log(filterUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(filterUniqueValues([]))// 0
console.log(filterUniqueValues([-2,-1,-1,0,1])) // 4