const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(nums.map(v => (+v).toFixed(3)).join('\n'))