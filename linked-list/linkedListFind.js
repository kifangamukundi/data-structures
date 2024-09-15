// Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
// The function should return a boolean indicating whether or not the linked list contains the target.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Iterative
const linkedListFind = (head, target) => {
    let current = head;
    while (current !== null) {
      if (current.val === target) return true;
      current = current.next;
    }
    return false;
  };

// Recursive
const linkedListFindRecursive = (head, target) => {
    if (head === null) return false;
    if (head.val === target) return true;
    return linkedListFind(head.next, target);
  };

// test 0
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true

// test 1
const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");

a1.next = b1;
b1.next = c1;
c1.next = d1;

// a -> b -> c -> d

console.log(linkedListFind(a1, "d")); // true

// test 2
const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");

a2.next = b2;
b2.next = c2;
c2.next = d2;

// a -> b -> c -> d

console.log(linkedListFind(a2, "q")); // false

// test 3
const node1 = new Node("jason");
const node2 = new Node("leneli");

node1.next = node2;

// jason -> leneli

console.log(linkedListFind(node1, "jason")); // true

// test 4
const node1_1 = new Node(42);

// 42

console.log(linkedListFind(node1_1, 42)); // true

// test 5
const node1_2 = new Node(42);

// 42

console.log(linkedListFind(node1_2, 100)); // false






  