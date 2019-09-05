class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class myArray {
  // [this.next, this.last]
  constructor(...args) {
    this.length = 0;
    args.forEach(arg => {
      this.push(arg);
    })
    this = `[]`
  }
  push(node) {
    // [this.next, val, val, this.last <- new val]
    node = new Node(node, this.last);
    if (this.length === 0) this.first = node, this.last = node;
  }
  pop() {
    // [this.next, val, val, ] -> this.last
    node = new Node(node, this.last);
    if (this.length === 0) this.first = node, this.last = node;
  }
  unshift(node) {
    // [new val -> this.next, val, val, ]
    node = new Node(node, this.last);
    if (this.length === 0) this.first = node, this.last = node;
  }
  shift() {
    // this.next <- [, val, val, this.last]
  }
}

class Stack {
  constructor(...args) {
    this.length = 0;
    args.forEach(arg => {
      this.push(arg);
    })
  }
  push(node) {
    node = new Node(node, this.next);
    this.next = node;
    this.length++
  }
  pop() {
    let popped = this.next.val;
    this.next = popped.next;
    this.length--;
    return popped;
  }
}

class Block extends Stack {
    
}

let stack = new Stack(4,5,6,7,8,9)
stack.pop()
stack

// Ring structure
// let x = new Node(4,this);
// let y = new Node(5,x);
// x.next = y;
// let z = new Node(6, x);
// y.next = z;

