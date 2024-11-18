const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim().split(' '));

const arr = Array.from({length:n},(_,i)=>(i+1)%2==0||(i+1)%3==0?1:0);

console.log(...arr);