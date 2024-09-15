// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). 
// The function should return a boolean indicating whether or not there exists a directed path between 
// the source and destination nodes.

// Depth first
const hasPath = (graph, src, dst) => {
    if (src === dst) return true;
  
    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst) === true) {
        return true;
      }
    }
  
    return false;
  };

// Breadth first
const hasPathBreadthFirst = (graph, src, dst) => {
    const queue = [src];
  
    while (queue.length) {
      const current = queue.shift();
      if (current === dst) return true;
  
      for (let neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }
  
    return false;
  };

// test 0
const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
console.log(hasPath(graph, 'f', 'k')); // true
  
// test 1
const graph1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
console.log(hasPath(graph1, 'f', 'j')); // false

// test 2
const graph2 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
console.log(hasPath(graph2, 'i', 'h')); // true

// test 3
const graph3 = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],  
  };
  
console.log(hasPath(graph3, 'v', 'w')); // true

// test 4
const graph4 = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],  
  };
  
console.log(hasPath(graph4, 'v', 'z')); // false
  
  
  

