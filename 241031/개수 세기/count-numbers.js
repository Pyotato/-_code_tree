const fs = require('fs');
const [nm,numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n,m] = nm.split(' ');

const same = numbers.split(' ').filter((num)=>+(num) === +(m));

console.log(same.length);