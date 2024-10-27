const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const getNthChar = (n) => numbers[n-1];

console.log(getNthChar(2),getNthChar(5),getNthChar(8));