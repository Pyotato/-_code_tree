const fs = require('fs');
const [c,...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log([c,...nums.map(v=>(+v).toFixed(2))].join('\n'));
