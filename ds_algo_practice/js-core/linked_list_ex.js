
class SLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val){
        const myNode = new node(val);
        if(!this.head){
            this.head = myNode;
            this.tail = myNode;
            this.length++;
            return this;
        }
        this.tail.next = myNode;
        this.tail = myNode;
        this.tail.next = null;
        this.length++;
        return this;
    }

    getPrev(pos){
        if(pos <= 0){
            return -1;
        }
        if(pos === this.length){
            return this.tail;
        }
        if(pos === 1){
            return this.head;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        return current;
    }
}

class node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const mySLL = new SLL()
mySLL.insert(1)
mySLL.insert(2)
mySLL.insert(3)
console.log(mySLL.getPrev(2))

//console.log(mySLL)