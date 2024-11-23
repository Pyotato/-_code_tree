const fs = require('fs');
const s = fs.readFileSync('/dev/stdin').toString().trim();

console.log(s);