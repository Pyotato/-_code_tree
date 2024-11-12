const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const arr = Array.from({length:100-n+1},(_,i)=>i+n);

console.log(...arr);