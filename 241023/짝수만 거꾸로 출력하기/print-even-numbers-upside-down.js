const fs = require('fs');
const [_,numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const evenNumbers = numbers.split(' ').filter(v => (+v)%2===0);

console.log(evenNumbers.reverse().join(' '));