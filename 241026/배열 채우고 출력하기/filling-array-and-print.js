const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(nums.reverse().join(''));