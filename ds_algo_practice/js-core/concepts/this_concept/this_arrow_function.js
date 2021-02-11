
const openArrowFunc = () => {
    console.log(this)
}

//openArrowFunc()//consoles {}

const obj1 = {
    val:"hi",
    fun:()=>{
        console.log(this)
    }
}

//obj1.fun()//consoles {}

const obj = {
    value: 'abc',
    createArrowFn: function() {
        return () => console.log(this);
    }
};
//const arrowFn = obj.createArrowFn();arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }
//this will be parents this or {}