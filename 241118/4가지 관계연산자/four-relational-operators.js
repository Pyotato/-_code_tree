const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

const compare = {
    '0':(a,b)=>a>=b,
    '1':(a,b)=>a>b,
    '2':(a,b)=>a<=b,
    '3':(a,b)=>a<b,
}

console.log(Array.from({length:4},(_,i)=>compare[i](a,b)?1:0).join('\n'));