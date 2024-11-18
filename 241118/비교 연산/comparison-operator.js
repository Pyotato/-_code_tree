const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

const calc = {
    "0":(a,b)=> a>=b,
    "1":(a,b)=> a>b,
    "2":(a,b)=> a<=b,
    "3":(a,b)=> a<b,
    "4":(a,b)=> a===b,
    "5":(a,b)=> a!==b,
}

const arr = Array.from({length:6},(_,i)=>calc[i](a,b)?1:0);

console.log(arr.join('\n'));