
// // class node {
// //     constructor(val){
// //         this.val = val;
// //         this.left = null;
// //         this.right = null;
// //     }
// // }

// // class BST {
// //     constructor(){
// //         this.root = null;
// //     }

// //     insert(val){
// //         const newNode = new node(val);
// //         if(!this.root){
// //             this.root = newNode;
// //             return this;
// //         }
// //         let current = this.root;
// //         while(true){
// //             if(current.val === val) return undefined;
// //             if(current.val < val){
// //                 if(current.left){
// //                     current = current.left;
// //                 }
// //                 else{
// //                     current.left = newNode;
// //                     return this;
// //                 }
// //             }
// //             else {
// //                 if(current.right){
// //                     current = current.right;
// //                 }
// //                 else{
// //                     current.right = newNode;
// //                     return this;
// //                 }
// //             }
// //         }
// //     }

// //     find(node){
// //         if(!this.root){
// //             return undefined;
// //         }
// //         let current = this.root;
// //         if(current.val === val){
// //             return this;
// //         }
// //         while(true){
// //             if(current.val>val){
// //                 if(current.right) current = current.right;
// //                 else return undefined;
// //             }
// //             else {
// //                 if(current.left) current = current.left;
// //                 else return undefined;
// //             }
// //         }
// //     }

// //     BFS(){
// //         var node = this.root,
// //             data = [],
// //             queue = [];
// //         queue.push(node);

// //         while(queue.length){
// //            node = queue.shift();
// //            data.push(node.value);
// //            if(node.left) queue.push(node.left);
// //            if(node.right) queue.push(node.right);
// //         }
// //         return data;
// //     }

// // }

// // const myBST = new BST();


// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
//         var current = this.root;
//         while(true){
//             if(value === current.value) return undefined;
//             if(value < current.value){
//                 if(current.left === null){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if(current.right === null){
//                     current.right = newNode;
//                     return this;
//                 } 
//                 current = current.right;
//             }
//         }
//     }
//     find(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 found = true;
//             }
//         }
//         if(!found) return undefined;
//         return current;
//     }
//     contains(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
//     BFS(){
//         let node = this.root,
//             data = [],
//             queue = [];
//         queue.push(this.root);
//         while(queue.length){
//             node = queue.shift();
//             if(node.left) queue.push(node.left)
//             if(node.right) queue.push(node.right)
//             data.push(node.value)
//         }
//         return data
//     }
//     DFSpreorder(){
//         let node = this.root,
//         data = [],
//         queue = [];
//         data = [...traverse(node)]
//         return data;
//     }
// }

// const traverse = function(node){
//     let data = [];
//     if(node.left){
//         data.push(node.value)
//         return traverse(node.left)
//     }
//     if(node.left){
//         data.push(node.value)
//         return traverse(node.left)
//     }
// }


// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// console.log(tree.BFS());
    

class BST {
    constructor(){
        this.root = null;
    }

    insert(val){
        const node = new BSTNode(val);
        if(!this.root){
            this.root = node;
            return this;
        }
        let current = this.root;
        while( true ){
            if(current.val === val) return undefined;
            if(current.val > val){
                if(!current.left) {
                    current.left = node;
                    return this;
                }
            }
            else {
                if(!current.right) {
                    current.right = node;
                    return this;
                }
            }
        }
    }

    contains(val){
        if(!this.root) return false;
        let current = this.root;
        while(true) {
            if(val === current.val) return true;
            if(val < current.val) {
                if(!current.left) return false;
                current = current.left;
            }
            else {
                if(!current.right) return false;
                current = current.right;
            }
        }
    }
}

class BSTNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
        
}

const myBST = new BST();
//console.log(myBST)
myBST.insert(10);
myBST.insert(6);
myBST.insert(15);
myBST.insert(3);
myBST.insert(8);
myBST.insert(20);
console.log(myBST)
console.log(myBST.contains(10))
