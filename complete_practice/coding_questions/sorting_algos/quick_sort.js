
const arr = [6,2,1,3,9,4];

const quickSort = (start,stop) => {
    if(start>=stop) return;
    let pivotInd = start;
    for(let i=start;i<stop;i++){
        if(arr[i]<arr[stop]){
            swapper(i,pivotInd);
            pivotInd++;
        }
    }
    swapper(pivotInd,stop);
    quickSort(start,pivotInd-1);
    quickSort(pivotInd+1,stop);
    return arr;
}

const swapper = (ind1,ind2) => {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}
console.log(quickSort(0,arr.length-1));