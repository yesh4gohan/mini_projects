const Chunk = (arr,chunkSize) => {
    if(chunkSize >= arr.length) return arr;
    let chunkArr = [];
    let i = 0;
    while(i<arr.length){
        chunkArr.push(arr.slice(i,i+chunkSize))
        i+=chunkSize;
    }
    return chunkArr;
}

console.log(Chunk([1,2,3,4,5,6],1))