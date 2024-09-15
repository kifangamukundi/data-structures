// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
// The function should return the minimum value within the tree.
// You may assume that the input tree is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Depth first recursive
const treeMinValue = (root) => {
    if (root === null) return Infinity;
    const smallestLeftValue = treeMinValue(root.left);
    const smallestRightValue = treeMinValue(root.right);
    return Math.min(root.val, smallestLeftValue, smallestRightValue);
  };

// Depth first iterative
const treeMinValueDepthIterative = (root) => {
    const stack = [root];
  
    let smallest = Infinity;
    while (stack.length) {
      const current = stack.pop();
      if (current.val < smallest) smallest = current.val;
  
      if (current.left !== null) stack.push(current.left);
      if (current.right !== null) stack.push(current.right);
    }
    return smallest;
  };

// Breadth first iterative
const treeMinValueBreadthFirst = (root) => {
    const queue = [root];
  
    let smallest = Infinity;
    while (queue.length) {
      const current = queue.shift();
      if (current.val < smallest) smallest = current.val;
  
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    return smallest;
  };

// test 0
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeMinValue(a)); // -> -2

// test 1
const a1 = new Node(5);
const b1 = new Node(11);
const c1 = new Node(3);
const d1 = new Node(4);
const e1 = new Node(14);
const f1 = new Node(12);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

console.log(treeMinValue(a1)); // -> 3

// test 2
const a2 = new Node(-1);
const b2 = new Node(-6);
const c2 = new Node(-5);
const d2 = new Node(-3);
const e2 = new Node(-4);
const f2 = new Node(-13);
const g2 = new Node(-2);
const h2 = new Node(-2);

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;
f2.right = h2;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2

console.log(treeMinValue(a2)); // -> -13

// test 3
const a3 = new Node(42);

//        42

console.log(treeMinValue(a3)); // -> 42



  
  
  
