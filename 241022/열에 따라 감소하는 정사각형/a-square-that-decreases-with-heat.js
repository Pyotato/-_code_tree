const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());
const arr = Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>n-j).join(' '));

console.log(arr.join('\n'));