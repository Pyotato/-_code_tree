const fs = require('fs');
const s = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(s);