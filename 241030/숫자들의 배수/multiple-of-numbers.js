const fs = require('fs');
const n = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const count = 10;
const answer = Array.from({length:count},(_,i)=>n*(i+1));

console.log(...answer);