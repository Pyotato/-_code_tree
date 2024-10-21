const fs = require('fs');
const [...input] =fs.readFileSync(0).toString().trim().split('\n');

console.log(input.reduce((acc,curr) => acc+=curr.split(' ').map(v=>v.toUpperCase()).join(' ')+'\n',''));