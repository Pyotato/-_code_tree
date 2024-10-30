const fs = require('fs');
const [n, numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const squared = numbers.split(' ').map((v)=>(+v)**2);
console.log(...squared);