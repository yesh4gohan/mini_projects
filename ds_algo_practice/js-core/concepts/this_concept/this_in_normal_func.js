
function normalFunction(){
    console.log(this)
}

//normalFunction()//consoles window Object

const obj1 = {
    val:"ni",
    fun:function(){
        console.log(this)
    }
}

//obj1.fun()//returns obj1 itself

const obj2 = {
    val:"ni",
    fun:function(){
        function insideFun(){
            console.log({myThis:this})//consoles global objeect as not called with obj.fun()
        }
        insideFun()
    }
}
//obj2.fun()

function ConstructorExample() {
    console.log(this);//{}
    this.value = 10;
    console.log(this);//{value:10}
}
//new ConstructorExample();

