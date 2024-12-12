const fs = require('fs');
const N = fs.readFileSync(0).toString().trim();

const num = Math.floor(parseInt(N, 2))*17;

console.log( parseInt(num, 2));
console.log(num.toString(2));