const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const answer = Array.from({length:5},(_,i)=>n*(i+1));

console.log(...answer);