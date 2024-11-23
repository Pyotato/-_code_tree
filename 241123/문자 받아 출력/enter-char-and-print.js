const fs = require('fs');
const c = fs.readFileSync('/dev/stdin').toString().trim();

console.log(c);