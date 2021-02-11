class Queue {
    constructor(){
        this.queue = new Array();
    }
    add(val){
        this.queue.unshift(val)
    }
    remove(){
        return this.queue.pop();
    }
    peek(){
        return this.queue.length?this.queue[0]:null;
    }
    print(){
        return this.queue;
    }
}

const q1 = new Queue();
q1.add(1)
q1.add(3)
q1.add(5)

const q2 = new Queue();
q2.add(2)
q2.add(4)
q2.add(6)

const q3 = new Queue();

while(q1.peek() && q2.peek()){
    q3.add(q1.remove());
    q3.add(q2.remove());
}

while(q1.peek()){
    q3.add(q1.remove())
}

while(q2.peek()){
    q3.add(q2.remove())
}

console.log(q3)