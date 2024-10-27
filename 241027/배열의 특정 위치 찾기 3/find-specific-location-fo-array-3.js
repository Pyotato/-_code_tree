const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const zeroIndex = numbers.indexOf('0');

const threeFromZeroIndex = numbers.slice(zeroIndex-3,zeroIndex);

const sum = threeFromZeroIndex.reduce((acc,curr)=>acc+=(+curr),0);

console.log(sum);