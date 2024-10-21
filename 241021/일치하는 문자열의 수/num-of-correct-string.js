const fs = require('fs');
const [n_A, ...str] = fs.readFileSync(0).toString().trim().split('\n');
const [n,A] = n_A.split(' ');

console.log(str.filter(v=>v===A).length);