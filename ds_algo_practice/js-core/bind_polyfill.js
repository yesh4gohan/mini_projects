

//to make it general property of Function type
Function.prototype.myBind = function(...args){
    let self = this//inside function this is deifferent so store context
     params = args.slice(1);//two params 1 st context and 2nd is params list 
    return function(){
        self.apply(args[0],params)//bind function to context and use apply to handle params list
    }
}

let obj1 = {
    name:"hello"
}
let obj2 = {
    name:"hi"
}

let printFun = function(param1,param2){
    console.log(this.name+" "+param1+param2)
}
//create a reference 
let fun1 = printFun.myBind(obj2,"yesh","hp")

fun1();