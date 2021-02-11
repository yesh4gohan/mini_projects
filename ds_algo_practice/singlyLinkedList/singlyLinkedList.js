class Node {
    constructor(val){
        this.next = null;
        this.val = val;
    }
}

class SinglyLinkedList {
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push
    push(val){
        const node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            node.next = null;
            this.tail = node;            
        }
        this.length++;
        return this;
    }
    //pop
    //get
    //set
    //insert
    //remove
    //rotate
    //print
    print(){
        let arr = [];
        let current = this.head;
        while(current !== null){
            arr.push(current.val);

            current = current.next;
        }
        console.log(arr);
    }
    reverse(){
        let current = this.head;
        this.head = this.tail;
        let i = 0;
        this.tail = current;
        let next;
        let prev = null;
        while(i<this.length){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        sll.print()
    }
}

const sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);

sll.print();
sll.reverse();