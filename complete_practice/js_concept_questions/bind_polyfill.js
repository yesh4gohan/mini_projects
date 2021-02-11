
const name = {
    fname:'Yash',
    lname:'hp'
}

function printName(nickName){
    console.log(`Hi ${this.fname} ${this.lname} ${nickName}`)
}

const printMyName = printName.bind(name);

printMyName("gohan");

Function.prototype.myBind = function(...args){
    let self = this;
    const args1 = args.slice(1);
    return function(...args2){
        self.apply(args[0],[...args1,...args2])
    }
}

const printMyBindName = printName.myBind(name);

printMyBindName("gohan");