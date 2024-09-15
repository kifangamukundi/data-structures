// Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
// The function should zipper the two lists together into single linked list by alternating nodes. 
// If one of the linked lists is longer than the other, the resulting list should terminate 
// with the remaining nodes. The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Iterative
const zipperLists = (head1, head2) => {
    const head = head1;
    let tail = head;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    
    while (current1 !== null && current2 !== null) {
      if (count % 2 === 0) {
        tail.next = current2;
        current2 = current2.next;
      } else {
        tail.next = current1;
        current1 = current1.next;
      }
      tail = tail.next;
      count += 1;
    }
    
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    
    return head;
  };

// Recursive
const zipperListsRecursive = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;
    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperLists(next1, next2);
    return head1;
  };

// test 0
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z

// test 1
const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");
a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;
e1.next = f1;
// a -> b -> c -> d -> e -> f

const x1 = new Node("x");
const y1 = new Node("y");
const z1 = new Node("z");
x1.next = y1;
y1.next = z1;
// x -> y -> z

console.log(zipperLists(a1, x1));
// a -> x -> b -> y -> c -> z -> d -> e -> f

// test 2
const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

console.log(zipperLists(s, one));
// s -> 1 -> t -> 2 -> 3 -> 4

// test 3
const w = new Node("w");

// w

const one_3 = new Node(1);
const two_3 = new Node(2);
const three_3 = new Node(3);
one_3.next = two_3;
two_3.next = three_3;
// 1 -> 2 -> 3 

console.log(zipperLists(w, one_3));
// w -> 1 -> 2 -> 3

// test 4
const one_4 = new Node(1);
const two_4 = new Node(2);
const three_4 = new Node(3);
one_4.next = two_4;
two_4.next = three_4;
// 1 -> 2 -> 3 

const w_4 = new Node("w");
// w

console.log(zipperLists(one_4, w_4));
// 1 -> w -> 2 -> 3

  

