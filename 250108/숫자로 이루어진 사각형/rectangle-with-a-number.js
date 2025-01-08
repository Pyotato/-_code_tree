const fs = require('fs');
const N = +fs.readFileSync(0).toString().trim();

let i=0;
const grid = Array.from({length:N},()=>Array.from({length:N},()=>{
    i=i>8?1:i+1;
    return i;
}).join(' '));

console.log(grid.join('\n'));