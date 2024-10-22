const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);
const evenNums = [2, 4, 6, 8];
const arr = evenNums.map(v => Array.from({length:b-a+1},(_,i)=>{
    return `${b-i} * ${v} = ${(b-i)*v}`
}).join(' / '));

console.log(arr.join('\n'));