const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src/assets/dsa');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const svgs = {
  'course-map-infographic.svg': 'Course Map Infographic',
  'brute-force-vs-optimized.svg': 'Brute Force vs Optimized',
  'pattern-wall.svg': 'Pattern Wall',
  'array-resize-animation.svg': 'Array Resize Animation',
  'todo-list-array-mapping.svg': 'Todo List Array Mapping',
  'palindrome-mirror.svg': 'Palindrome Mirror',
  'singly-vs-doubly-linked-list.svg': 'Singly vs Doubly Linked List',
  'memory-scatter-illustration.svg': 'Memory Scatter Illustration',
  'playlist-interaction-mockup.svg': 'Playlist Interaction Mockup',
  'hash-function-flow.svg': 'Hash Function Flow',
  'collision-handling-visual.svg': 'Collision Handling Visual',
  'dictionary-lookup-ui.svg': 'Dictionary Lookup UI',
  'stack-push-pop-animation.svg': 'Stack Push/Pop Animation',
  'undo-timeline-diagram.svg': 'Undo Timeline Diagram',
  'browser-back-stack-flow.svg': 'Browser Back Stack Flow',
  'fifo-queue-line.svg': 'FIFO Queue Line',
  'printer-queue-dashboard.svg': 'Printer Queue Dashboard',
  'deque-comparison.svg': 'Deque Comparison',
  'russian-doll-analogy-art.svg': 'Russian Doll Analogy Art',
  'call-stack-frame-diagram.svg': 'Call Stack Frame Diagram',
  'recursion-tree.svg': 'Recursion Tree',
  'bubble-sort-pass-by-pass.svg': 'Bubble Sort Pass-by-Pass',
  'divide-conquer-split-merge-diagram.svg': 'Divide & Conquer Split/Merge Diagram',
  'runtime-comparison-chart.svg': 'Runtime Comparison Chart',
  'file-system-tree.svg': 'File System Tree',
  'bst-search-path.svg': 'BST Search Path',
  'array-vs-bst-search-steps.svg': 'Array vs BST Search Steps',
  'min-heap-vs-max-heap-tree.svg': 'Min-Heap vs Max-Heap Tree',
  'heap-array-mapping.svg': 'Heap Array Mapping',
  'hospital-triage-queue-board.svg': 'Hospital Triage Queue Board',
  'directed-vs-undirected-graph.svg': 'Directed vs Undirected Graph',
  'bfs-layer-traversal.svg': 'BFS Layer Traversal',
  'dfs-backtrack-path.svg': 'DFS Backtrack Path',
  'map-route-graph.svg': 'Map Route Graph',
  'coin-change-decision-tree.svg': 'Coin Change Decision Tree',
  'local-vs-global-optimum-illustration.svg': 'Local vs Global Optimum Illustration',
  'activity-card.svg': 'Activity Card',
  'maze-backtracking-path.svg': 'Maze Backtracking Path',
  'sudoku-decision-flow.svg': 'Sudoku Decision Flow',
  'recursion-stack-board-state.svg': 'Recursion Stack + Board State',
  'overlapping-subproblems-tree.svg': 'Overlapping Subproblems Tree',
  'memoization-cache-table.svg': 'Memoization Cache Table',
  'bottom-up-dp-grid.svg': 'Bottom-up DP Grid'
};

for (const [filename, title] of Object.entries(svgs)) {
  const filepath = path.join(assetsDir, filename);
  if (!fs.existsSync(filepath)) {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <rect width="100%" height="100%" fill="#f8fafc" rx="8"/>
  <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#334155" text-anchor="middle" dominant-baseline="middle">${title}</text>
  <text x="50%" y="60%" font-family="system-ui, sans-serif" font-size="16" fill="#64748b" text-anchor="middle" dominant-baseline="middle">Visual representation placeholder</text>
</svg>`;
    fs.writeFileSync(filepath, svgContent);
  }
}

console.log('SVGs generated.');
