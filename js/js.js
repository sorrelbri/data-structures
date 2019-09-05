// * Exports all classes

// * Function Declarations
const addLast = (obj, meth) => {
  return obj[meth] = node => {
    node = new Node(node);
    if (obj.last) obj.last.next = node.prev; 
    node.prev = obj.last, obj.last = node;
    return node.val;
  }
}

const addFirst = (obj, meth) => {
  return obj[meth] = node => {
    node = newNode(node);
    if (obj.first) obj.first.prev = node;
    node.next = obj.first, obj.first = node;
    return node.val;
  }
}

const addPeekLast = (obj, meth) => {
  return obj[meth] = () => {
    return obj.last.val;
  }
}

const addPeekFirst = (obj, meth) => {
  return obj[meth] = () => {
    return obj.first.val;
  }
}

const addDestroyLast = (obj, meth) => {
  return obj[meth] = () => {
    last = obj.last;
    obj.last = last.prev;
    return last.val;
  }
}

const addDestroyFirst = (obj, meth) => {
  return obj[meth] = () => {
    first = obj.first;
    obj.first = first.next;
    return first.val;
  }
}

const makeArr = () => {
  let newArr = {};
  addLast(newArr, 'push');
  addFirst(newArr, 'unshift');
  addPeekLast(newArr, 'peekPop');
  addPeekFirst(newArr, 'peekShift');
  addDestroyLast(newArr, 'pop');
  addDestroyFirst(newArr, 'shift');
  return newArr;
}

class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class myArray {
  // [this.first, this.first.next, ... , this.last.prev, this.last]
  constructor(...args) {
    this.length = 0;
    args.forEach(arg => {
      this.push(arg);
    })
  }
  push(node) {
    // [this.first, val, val, this.last <- new val]
    node = new Node(node, this.last);
    node.prev = this.last, this.last = node;
  }
  pop() {
    // [this.next, val, val, ] -> this.last
    node = this.last;
    this.last = node.prev;
    return node;
  }
  unshift(node) {
    // [new val -> this.next, val, val, ]
    node = new Node(node, this.last);
    node.next = this.first, this.first = node;
  }
  shift() {
    // this.next <- [, val, val, this.last]
    node = this.first;
    this.first = node.next;
    return node;
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


// Ring structure
// let x = new Node(4,this);
// let y = new Node(5,x);
// x.next = y;
// let z = new Node(6, x);
// y.next = z;


module.exports = {
  Node,
  myArray,
  Stack,
  makeArr
}
