const fs = require('fs');
const num = fs.readFileSync('/dev/stdin').toString().trim();

const [a,b] = num.split('-');

console.log(a+b);