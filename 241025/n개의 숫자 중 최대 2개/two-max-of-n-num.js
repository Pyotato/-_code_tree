const fs = require('fs');
const[N,nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = nums.split(' ').map(v => +v);

const sorted = numbers.sort((a,b)=>b-a);

console.log(sorted.slice(0,2).join(' '));