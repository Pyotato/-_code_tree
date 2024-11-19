const fs = require('fs');
const a = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log( a % 13 === 0 || a % 19 === 0 ? 'True': 'False');