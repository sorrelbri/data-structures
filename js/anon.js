// * Exports all classes

// * Function Declarations
// const addLast = (obj, meth) => {
//   return obj[meth] = node => {
//     node = new Node(node);
//     if (obj.last) obj.last.next = node.prev; 
//     node.prev = obj.last, obj.last = node;
//     return node.val;
//   }
// }

// const addFirst = (obj, meth) => {
//   return obj[meth] = node => {
//     node = new Node(node);
//     if (obj.first) obj.first.prev = node;
//     node.next = obj.first, obj.first = node;
//     return node.val;
//   }
// }

// const addPeekLast = (obj, meth) => {
//   return obj[meth] = () => {
//     return obj.last.val;
//   }
// }

// const addPeekFirst = (obj, meth) => {
//   return obj[meth] = () => {
//     return obj.first.val;
//   }
// }

// const addDestroyLast = (obj, meth) => {
//   return obj[meth] = () => {
//     last = obj.last;
//     obj.last = last.prev;
//     return last.val;
//   }
// }

// const addDestroyFirst = (obj, meth) => {
//   return obj[meth] = () => {
//     first = obj.first;
//     obj.first = first.next;
//     return first.val;
//   }
// }

// const addFindValueAt = (obj, meth) => {
//   return obj[meth] = i => {
//     if (i < 0) {
//       let node = obj.last
//       while (i < 0) {
//         node = node.prev;
//         i++;
//       }
//       return node.val;
//     }
//     if (i <= 0) {
//       let node = obj.first
//       while (i<= 0) {
//         node = node.next;
//         i--;
//       }
//       return node.val;
//     }
//   }
// }

// factory function open
const LinkedList = () => {
  let obj = {};
// factory function open

  // list-head
  obj.head = null;

  // list-size
  obj.size = 0;

  // list-push
  obj.push = node => {
    node = Node(node, obj.head);
    obj.head = node;
    if (obj.hasOwnProperty('size')) obj.size++;
  };

  // list-peek
  obj.peek = _ => obj.head ? obj.head.val : undefined;

  // list-pop
  obj.pop = _ => {
    let pop = obj.head || null;
    obj.head = pop ? pop.next : null;
    return pop ? pop.val : undefined;
  }

  // list-isEmpty

// factory function close
  return obj;
}
// factory function close

const Node = (val, next) => {
  let node = {}
  node.val = val, node.next = next;
  return node;
}



// class StackList {
//   constructor(...args) {
//     this.length = 0;
//     args.forEach(arg => {
//       this.push(arg);
//     })
//   }
//   push(node) {
//     node = new Node(node, this.next);
//     this.next = node;
//     this.length++
//   }
//   pop() {
//     let popped = this.next.val;
//     this.next = popped.next;
//     this.length--;
//     return popped;
//   }
// }

// class Block extends StackList {
    
// }


// // Ring structure
// // let x = new Node(4,this);
// // let y = new Node(5,x);
// // x.next = y;
// // let z = new Node(6, x);
// // y.next = z;


// module.exports = {
//   Node,
//   StackList,
//   LinkedList
// }

