// Write a function, getNodeValue, that takes in the head of a linked list and an index. 
// The function should return the value of the linked list at the specified index.
// If there is no node at the given index, then return null.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Iterative
const getNodeValue = (head, index) => {
    let count = 0;
    let current = head;
    while (current !== null) {
      if (count === index) return current.val;
      current = current.next;
      count += 1;
    }
    return null;
  };

// Recursive
const getNodeValueRecursive = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;
    return getNodeValue(head.next, index - 1);
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

console.log(getNodeValue(a, 2)); // 'c'

// test 1
const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");

a1.next = b1;
b1.next = c1;
c1.next = d1;

// a -> b -> c -> d

console.log(getNodeValue(a1, 3)); // 'd'

// test 2
const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");

a2.next = b2;
b2.next = c2;
c2.next = d2;

// a -> b -> c -> d

console.log(getNodeValue(a2, 7)); // null

// test 3
const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

console.log(getNodeValue(node1, 0)); // 'banana'

// test 4
const node1_1 = new Node("banana");
const node2_1 = new Node("mango");

node1_1.next = node2_1;

// banana -> mango

console.log(getNodeValue(node1_1, 1)); // 'mango'





  

