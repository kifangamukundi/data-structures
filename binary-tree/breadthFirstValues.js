// Write a function, breadthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in breadth-first order.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstValues = (root) => {
    if (root === null) return [];
  
    const values = [];
    const queue = [root];
  
    while (queue.length > 0) {
      const node = queue.shift();
      values.push(node.val);
  
      if (node.left !== null) queue.push(node.left);
  
      if (node.right !== null) queue.push(node.right);
    }
  
    return values;
  };

//   test 0
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(breadthFirstValues(a)); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']

// test 1
const a1 = new Node('a');
const b1 = new Node('b');
const c1 = new Node('c');
const d1 = new Node('d');
const e1 = new Node('e');
const f1 = new Node('f');
const g1 = new Node('g');
const h1 = new Node('h');

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
e1.left = g1;
f1.right = h1;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(breadthFirstValues(a1)); 
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// test 2
const a2 = new Node('a');

//      a

console.log(breadthFirstValues(a2));
//    -> ['a']

// test 3
const a3 = new Node('a');
const b3 = new Node('b');
const c3 = new Node('c');
const d3 = new Node('d');
const e3 = new Node('e');
const x3 = new Node('x');

a3.right = b3;
b3.left = c3;
c3.left = x3;
c3.right = d3;
d3.right = e3;

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

console.log(breadthFirstValues(a3));
//    -> ['a', 'b', 'c', 'x', 'd', 'e']

// test 4
console.log(breadthFirstValues(null));
//    -> []




