const UniqueEle = arr => {
    return arr.filter((each,ind)=>(arr.indexOf(each)===ind))
}

console.log(UniqueEle([1,2,1,1,3]))