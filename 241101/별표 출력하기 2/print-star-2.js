const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log(Array.from({length:+n},(_,i)=>''.padStart(2*(+n-(i)),'* ')).join('\n'));