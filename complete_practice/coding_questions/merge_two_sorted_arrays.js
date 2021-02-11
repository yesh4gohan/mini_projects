
const merger = (arr1,arr2) => {
    const arr = [];
    let i = 0;
    let j = 0;
    for(i = 0,j=0;i<arr1.length&&j<arr2.length;){
        if(arr1[i]<=arr2[j]){
            arr.push(arr1[i]);
            i++;
        }
        else{
            arr.push(arr2[j]);
            j++;
        }
    }
    if(i < arr1.length){
        while(i<arr1.length){
            arr.push(arr1[i]);
            i++;
        }
    }
    if(j < arr2.length){
        while(j<arr2.length){
            arr.push(arr2[j]);
            j++;
        }
    }
    return arr;
}

console.log(merger([1],[2,4,6,7]))