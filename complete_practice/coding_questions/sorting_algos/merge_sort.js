
// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array

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

const merge_sort = arr => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left =  merge_sort(arr.slice(0,mid))    
    let right = merge_sort(arr.slice(mid))
    console.log({left,right})
    return merger(left,right)
}

console.log(merge_sort([3,2,4,7,1,5,6]));

3,2,4

3,
2,
4
2,3,4

1,5,6,7

1,5

6,7

1,
5,
6,
7

2,3,4
1,5,6,7

