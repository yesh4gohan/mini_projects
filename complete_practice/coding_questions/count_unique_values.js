const countValues = arr => {
    let i = 0;
    for(let j=1;j<arr.length;j++){
        if(arr[j] !== arr[i]){
            arr[++i] = arr[j]
        }
    }
    return i+1;
}

console.log(countValues([0,1,2,3,4,4]))