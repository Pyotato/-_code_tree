const fs = require('fs');
const [n,numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const oddNumbers = numbers.split(' ').filter((v)=>(+v)%2===0);

console.log(...oddNumbers);