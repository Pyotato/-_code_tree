const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log((30.48*n).toFixed(1))