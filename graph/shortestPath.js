// Write a function, shortestPath, that takes in an array of edges for an undirected graph and 
// two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. 
// Consider the length as the number of edges in the path, not the number of nodes. 
// If there is no path between A and B, then return -1.

// Breadth first
const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set([ nodeA ]);
    const queue = [[ nodeA, 0 ]];
    
    while (queue.length > 0) {
      const [ node, distance ] = queue.shift();
      
      if (node === nodeB) return distance;
      
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([ neighbor, distance + 1 ]);
        }
      }
    }
    
    return -1;
  };
  
  const buildGraph = (edges) => {
    const graph = {};
    
    for (let edge of edges) {
      const [a, b] = edge;
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      
      graph[a].push(b);
      graph[b].push(a);
    }
    
    return graph;
  };

// test 0
const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
  
console.log(shortestPath(edges, 'w', 'z')); // -> 2

// test 1
const edges1 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
  
console.log(shortestPath(edges1, 'y', 'x')); // -> 1

// test 2
const edges2 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];
  
console.log(shortestPath(edges2, 'a', 'e')); // -> 3

// test 3
const edges3 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];
  
console.log(shortestPath(edges3, 'e', 'c')); // -> 2

// test 4
const edges4 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];
  
console.log(shortestPath(edges4, 'b', 'g')); // -> -1

// test 5
const edges5 = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
  ];
  
console.log(shortestPath(edges5, 'w', 'e')); // -> 1

// test 6
const edges6 = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
  ];
  
console.log(shortestPath(edges6, 'n', 'e')); // -> 2

// test 7
const edges7 = [
    ['m', 'n'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'q'],
    ['t', 'o'],
    ['r', 'q'],
    ['r', 's']
  ];
  
  console.log(shortestPath(edges7, 'm', 's')); // -> 6
  
  
  
  
  
  
  
  

