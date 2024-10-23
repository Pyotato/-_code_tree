const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

const nArr = Array.from({length:N},(_,i)=>Array.from({length:i+1},(_,j)=>N-j).reverse().join(' '));

console.log(nArr.join('\n'));