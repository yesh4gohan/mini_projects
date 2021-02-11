// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined


const sumZero = arr => {
    for(let i = 0,j=arr.length-1;i<j;){
        if(arr[i]+arr[j] === 0){
            return [arr[i],arr[j]];
        }
        if(arr[i]+arr[j] > 0){
            j--;
        }
        else {
            i++;
        }
    }
    return;
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) // undefined
console.log(sumZero([-4,-3,-2,-1,0,1]))