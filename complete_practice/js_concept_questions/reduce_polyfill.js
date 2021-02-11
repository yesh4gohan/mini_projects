
const arr = [1,2,3,4];

const sum = arr.reduce((acc,curr)=>(acc*curr),0);

Array.prototype.myReduce = function(cb,def){
    let returnVal = def;
    for(let i = 0;i<this.length;i++){
        returnVal = cb(returnVal,this[i]);
    }
    return returnVal;
}

const sum2 = arr.myReduce((acc,curr)=>(acc*curr),0);

console.log({sum,sum2})