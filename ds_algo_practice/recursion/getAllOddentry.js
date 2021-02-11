const oddFilter = arr1 => {
    const filteredArr = [];
    myFilter = arr => {
        if(!arr.length){
            return;
        }
        if(arr[0]%2!== 0){
            filteredArr.push(arr[0])
        }
        myFilter(arr.slice(1))
    }
    myFilter(arr1)
    return filteredArr
}

console.log(oddFilter([1,2,3,4,5]))