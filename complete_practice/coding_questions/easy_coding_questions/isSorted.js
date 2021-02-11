const isSorted = arr => {
    if(arr.length<=1) return true;
    if(arr[0]<arr[1]){
        return isSorted(arr.slice(1));
    }
    else {
        return false
    }

}

console.log(isSorted([-1,0,1,2]))
