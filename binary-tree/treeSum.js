// Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
// The function should return the total sum of all values in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Depth first approach
const treeSum = (root) => {
    if (root === null) return 0;
  
    return root.val + treeSum(root.left) + treeSum(root.right);
  };

  const treeSumBreadthFirst = (root, target) => {
    if (root === null) return 0;
  
    const queue = [root];
    let totalSum = 0;
    while (queue.length > 0) {
      const node = queue.shift();
      totalSum += node.val;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  
    return totalSum;
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

console.log(treeSum(a)); // -> 21

// test 1
const a1 = new Node(1);
const b1 = new Node(6);
const c1 = new Node(0);
const d1 = new Node(3);
const e1 = new Node(-6);
const f1 = new Node(2);
const g1 = new Node(2);
const h1 = new Node(2);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
e1.left = g1;
f1.right = h1;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

console.log(treeSum(a1)); // -> 10

// test 2
console.log(treeSum(null)); // -> 0
