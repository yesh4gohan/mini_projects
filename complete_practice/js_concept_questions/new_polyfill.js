function myNew(parentFunc,...args){
    const res = {};
    if(parentFunc.prototype !== null){
        res.__proto__ === parentFunc.prototype
    }
    return parentFunc.apply(res,[...args])
}

function myGen(data){
    this.data = data;
    this.printData = function(){
        console.log(this.data)
    }
    return this
}

const myObj1 = new myGen("helo")
const myObj2 = myNew(myGen,"hi")

myObj2.printData()