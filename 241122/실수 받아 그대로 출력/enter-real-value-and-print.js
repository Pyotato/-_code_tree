const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log(n.toFixed(2));