const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

const sum = a+b+c;
const avg = sum/3;

console.log(sum);
console.log(Math.floor(avg));