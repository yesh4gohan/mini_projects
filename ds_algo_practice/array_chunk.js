
const chunk = (arr,chunk_size) => {
    const result_arr = new Array();
    while(arr.length>chunk_size){
        result_arr.push(arr.splice(0,chunk_size));
    }
    result_arr.push(arr)
    console.log(result_arr)
}

chunk([1,2,3,4,5],5);