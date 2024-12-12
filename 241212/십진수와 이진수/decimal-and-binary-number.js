const fs = require('fs');
const N = fs.readFileSync(0).toString().trim();

const num = parseInt(N,2);

console.log((num*17).toString(2));