// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

const search = (arr,key) => {
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2)
    while(start<=end){
        if(key>arr[mid]){
            start = mid+1;
        }
        else if(key<arr[mid]){
            end = mid-1;
        }
        else {
            return mid;
        }
        mid = Math.floor((start+end)/2);
    }
    return -1;
}

console.log(search([1,2,3,4,5,6],4))// 3
console.log(search([1,2,3,4,5,6],6)) // 5
console.log(search([1,2,3,4,5,6],11)) // -1