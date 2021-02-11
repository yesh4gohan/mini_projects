class Stack {
    constructor(){
        this.stack = new Array();
    }
    add(val){
        return this.stack.push(val)
    }
    remove(){
        return this.stack.shift();
    }
    peek(){
        return this.stack.length?this.stack[0]:null
    }
}

const st1 = new Stack();
const st2 = new Stack();

st1.add(1);
st1.add(2);
st1.add(3);

while(st1.peek()){
    st2.add(st1.remove())
}

while(st2.peek()){
    st1.add(st2.remove())
}