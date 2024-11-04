const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const A = 'A'.charCodeAt(0);
const Z = 'Z'.charCodeAt(0);
let startChar = A;

const alphabets = Array.from({length:n},(_,i)=>Array.from({length:i+1},()=>{
    let curr = startChar;
    startChar = curr+1>Z ? A: curr+1;
    return String.fromCharCode(curr++);
}).join(''));

console.log(alphabets.join('\n'));