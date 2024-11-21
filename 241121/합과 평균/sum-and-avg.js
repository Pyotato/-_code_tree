const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

const sum = a+b;

console.log(sum, (sum/2).toFixed(1));
