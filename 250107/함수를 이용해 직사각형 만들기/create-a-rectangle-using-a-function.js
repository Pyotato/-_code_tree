const fs = require('fs');

const [n,m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const grid = Array.from({length:n},()=>''.padStart(m,'1'));

console.log(grid.join('\n'));