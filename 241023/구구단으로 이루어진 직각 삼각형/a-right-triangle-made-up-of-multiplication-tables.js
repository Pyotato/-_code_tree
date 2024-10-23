const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString().trim();

const timeTable = Array.from({length:n},(_,i)=>Array.from({length:n-i},(_,j)=>`${i+1} * ${j+1} = ${(j+1)*(i+1)}`).join(' / '))

console.log(timeTable.join('\n'));