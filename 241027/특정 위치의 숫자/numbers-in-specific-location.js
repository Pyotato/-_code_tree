const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const getNth = (n)=> +(numbers[n-1]);
const answer = getNth(3)+getNth(5)+getNth(10);

console.log(answer);