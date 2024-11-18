const fs = require('fs');
const [a,b,c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const min = Math.min(a, b, c);
console.log(a === min? 1: 0, a == b && b == c? 1: 0);