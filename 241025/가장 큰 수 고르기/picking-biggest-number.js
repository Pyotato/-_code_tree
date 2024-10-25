const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(Math.max(...nums.map(v => +v)));