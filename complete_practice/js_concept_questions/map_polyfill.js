
const arr = [1,2,3,4];

const newArr = arr.map((each,index)=>{
    return each*index;
})

Array.prototype.myMap = function(cb){
    const returnArr = [];
    for(let i = 0;i<this.length;i++){
        const val = cb(this[i],i);
        returnArr.push(val)
    }
    return returnArr;
}

const newArr2 = arr.myMap((each,index)=>{
    return each*index;
})

console.log({newArr,newArr2})