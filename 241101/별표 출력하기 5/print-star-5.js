const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log(Array.from({length:n},(_,i)=>Array.from({length:n-i},(_,j)=>''.padStart(n-i,'*')).join(' ')).join('\n'))