const fs = require('fs');

const N = +(fs.readFileSync(0).toString().trim());

let i = 0;

console.log(Array.from({length:N},()=>Array.from({length:N},()=>i=i>=9?1:i+1).join(' ')).join('\n'))