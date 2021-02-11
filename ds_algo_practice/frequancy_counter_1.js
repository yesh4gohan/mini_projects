//same([1,2,3],[4,1,9]) -> true
//same([1,2,3],[1,9]) -> false
//same([1,2,1],[4,4,1]) -> false

const same = (a,b) => {
    if(a.length != b.length){
        return false;
    }
    const aObj = ObjCreator(a);
    const bObj = ObjCreator(b);
    let flag = true;
    for(let key in aObj){
        if(!Math.pow(key,2) in bObj){
            return false;
        }
        if(aObj[key] !== bObj[Math.pow(key,2)]){
            return false;
        }
    }
    return true;
}

const ObjCreator = arr => {
    const obj = {}
    arr.forEach(element => {
        obj[element]?obj[element]+=1:obj[element]=1;
    });
    return obj;
}

console.log(same([1,2,1],[4,4,1]))
console.log(same([1,2],[4,4,1]))
console.log(same([1,2,1],[1,4,1]))

