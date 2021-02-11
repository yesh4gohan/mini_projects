// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
      }
}

class LinkedList {
    constructor(){
        this.head = null;
    }   

    insertFirst(data){
        this.head = new Node(data,this.head);
    }

    size(){
        let node = this.head;
        let items = 0;
        while(node){
            items++;
            node = node.next;
        }
        return items;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }
        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
        }
        
    }

    insertLast(data){
        let node = this.getLast();
        if(!node){
            this.head = new Node(data);
        }
        else{
            node.next = new Node(data);
        }
    }

    getAt(ind){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === ind){
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }

    removeAt(ind){
        if(!this.head){
            return;
        }
        if(ind === 0){
            this.head = this.head.next;
            return;
        }
        let node = this.getAt(ind-1);
        if(!node || !node.next){
            return;
        }
        node.next = node.next.next;
    }

    insertAt(data,ind){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if(ind === 0){
            this.head = new Node(data, this.head);
            return;
        }
        if(ind === this.size()){
            this.insertLast(data);
            return;
        }
        let counter = 0;
        let node = this.head;
        while(node && counter<ind){
            node = node.next;
        }
        let temp = node.next || this.getLast();
        node.next = new Node(data,this.head);
        node.next.next = temp;
    }
}

module.exports = { Node, LinkedList };
