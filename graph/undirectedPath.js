// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and 
// two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path 
// between nodeA and nodeB.

// Depth first
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
  };
  
  const buildGraph = (edges) => {
    const graph = {};
    
    for (let edge of edges) {
      const [ a, b ] = edge;
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }
    
    return graph;
  };
  
  const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    
    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst, visited) === true) {
        return true;    
      }
    }
    
    return false;
  };

// test 0
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
console.log(undirectedPath(edges, 'j', 'm')); // -> true

// test 1
const edges1 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
console.log(undirectedPath(edges1, 'm', 'j')); // -> true

// test 2
const edges2 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
console.log(undirectedPath(edges2, 'l', 'j')); // -> true

// test 3
const edges3 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
console.log(undirectedPath(edges3, 'k', 'o')); // -> false

// test 4
const edges4 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
console.log(undirectedPath(edges4, 'i', 'o')); // -> false

// test 5
const edges5 = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
  ];

console.log(undirectedPath(edges5, 'a', 'b')); // -> true

// test 6
const edges6 = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
  ];
  
console.log(undirectedPath(edges6, 'a', 'c')); // -> true

// test 7
const edges7 = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
  ];
  
console.log(undirectedPath(edges7, 'r', 't')); // -> true

// test 8
const edges8 = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
  ];
  
console.log(undirectedPath(edges8, 'r', 'b')); // -> false

// test 9
const edges9 = [
    ['s', 'r'],
    ['t', 'q'],
    ['q', 'r'],
  ];
  
console.log(undirectedPath(edges9, 'r', 't')); // -> true
  
  