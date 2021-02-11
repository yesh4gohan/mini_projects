
// const arr = [5,4,2,9,1];

// const findNthminEle = (start,stop,n) => {
//     if(start>=stop){
//         return arr[start]
//     }
//     let pivotIndex = start;

//     for(let i = start;i<=stop;i++){
//         if(arr[i]<arr[stop]){
//             pivotIndex++;
//             swapper(i,stop)
//         }
//     }
//     swapper(pivotIndex,stop);
//     if(n<pivotIndex){
//         return findNthminEle(start,pivotIndex-1,n);
//     }
//     else if(n>pivotIndex){
//         return findNthminEle(pivotIndex+1,stop,n);
//     }
//     else {
//         return arr[pivotIndex];
//     }
// }

// const swapper = (ind1,ind2) => {
//     let temp = arr[ind1];
//     arr[ind1] = arr[ind2];
//     arr[ind2] = temp; 
// }

// console.log(findNthminEle(0,arr.length-1,4));


const findNthMin = (arr,nth) => {
    function findPivot(start,end){
        let pivotIndex = start;
        if(start>=end){
            return -1;
        }
        for(let i=start;i<=end;i++){
            if(arr[i]<arr[pivotIndex]){
                pivotIndex++;
                swapper(arr,i,pivotIndex)
            }
        }
        swapper(arr,start,pivotIndex)
        if(nth===pivotIndex){
            return arr[pivotIndex]
        }
        else if(nth>pivotIndex){
            return findPivot(pivotIndex+1,end);
        }
        else {
            return findPivot(start,pivotIndex-1);
        }
    }

    findPivot(0,arr.length-1);
}