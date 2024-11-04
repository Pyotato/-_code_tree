const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const A = 'A'.charCodeAt(0);
let nextStartChar = A;

const alphabets = Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>{
    return  String.fromCharCode(nextStartChar++);
}).join(''))

console.log(alphabets.join('\n'));