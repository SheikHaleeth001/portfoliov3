// Generate GitHub-style contribution heatmap
const heatmap = document.getElementById('heatmap');
const classes = ['', 'c1', 'c2', 'c3', 'c4'];
for (let i = 0; i < 182; i++) {
  const cell = document.createElement('div');
  const level = Math.random() < 0.25 ? 0 : Math.floor(Math.random() * 4) + 1;
  cell.className = 'cell ' + classes[level];
  heatmap.appendChild(cell);
}
