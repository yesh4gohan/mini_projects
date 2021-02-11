const reduce = (arr,cb,default_type=null) =>{
    let ret = default_type;
    for(let i = 0;i<arr.length;i++){
        ret = cb(ret,arr[i])
    }
    return ret;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))