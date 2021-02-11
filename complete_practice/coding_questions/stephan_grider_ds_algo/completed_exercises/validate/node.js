class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  bfs(){
    console.log(this)
    let arr = [this];
    let datas = [this.data]
    while(arr.length){
      let node = arr.shift();
      if(node){
        if(node.left){
          datas.push(node.left.data);
          arr.push(node.left);
        }
        else {
          arr.push(null)
        }
        if(node.right){
          datas.push(node.right.data);
          arr.push(node.right);
        }
        else{
          arr.push(null)
        }
      }

    }
    console.log(datas)
  }
}
const n = new Node(10);

n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);
n.bfs();

module.exports = Node;

  //         10
  //   5   null       null   15
  // 0   null            null          20


0,1,2,3,4,5
0,3,1,4,2,5
