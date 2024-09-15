// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
// The function should return a boolean indicating whether or not the value is contained in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Breadth first
const treeIncludes = (root, target) => {
    if (root === null) return false;
  
    const queue = [root];
  
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.val === target) return true;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  
    return false;
  };

  const treeIncludesDepthFirst = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
  };

// test 0
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

console.log(treeIncludes(a, "e")); // -> true

// test 1
const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludes(a1, "a")); // -> true

// test 2
const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");
const e2 = new Node("e");
const f2 = new Node("f");

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludes(a2, "n")); // -> false

// test 3
const a3 = new Node("a");
const b3 = new Node("b");
const c3 = new Node("c");
const d3 = new Node("d");
const e3 = new Node("e");
const f3 = new Node("f");
const g3 = new Node("g");
const h3 = new Node("h");

a3.left = b3;
a3.right = c3;
b3.left = d3;
b3.right = e3;
c3.right = f3;
e3.left = g3;
f3.right = h3;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(treeIncludes(a3, "f")); // -> true

// test 4
const a4 = new Node("a");
const b4 = new Node("b");
const c4 = new Node("c");
const d4 = new Node("d");
const e4 = new Node("e");
const f4 = new Node("f");
const g4 = new Node("g");
const h4 = new Node("h");

a4.left = b4;
a4.right = c4;
b4.left = d4;
b4.right = e4;
c4.right = f4;
e4.left = g4;
f4.right = h4;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(treeIncludes(a4, "p")); // -> false

// test 5
console.log(treeIncludes(null, "b")); // -> false





  
