// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0;i<arr.length;i++){
        let count = 0;
        for(let j = 0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                count++;
            }
        }
        if(count === 0){
            return arr;
        }
    }
    return arr;
}

function selectionSort(arr) {
    
    for(let i = 0;i<arr.length;i++){
        let minIndex = i;
        let j;
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != i){
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length===1) return arr;
    let mid =  Math.floor((arr.length)/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right) {
    let sorted = [];
    let l1 = left.length;
    let l2 = right.length;
    let i = 0;
    let j = 0;
    for(i=0,j=0;i<l1 && j<l2;){
        if(left[i]<=right[j]){
            sorted.push(left[i]);
            i++;
        }
        else {
            sorted.push(right[j]);
            j++;
        }
    }
    if(i<l1){
        while(i<l1){
            sorted.push(left[i]);
            i++;
        }
    }
    if(j<l2){
        while(j<l2){
            sorted.push(right[j]);
            j++;
        }
    }
    return sorted;
}
module.exports = { bubbleSort, selectionSort, mergeSort, merge };
