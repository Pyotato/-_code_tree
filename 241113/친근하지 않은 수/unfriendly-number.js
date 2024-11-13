const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const filtered = Array.from({length:n},(_,i)=>i+1).filter(v => !(v%2===0 || v%3===0||v%5===0));
console.log(filtered.length);