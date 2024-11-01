const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(Array.from({length:+(n)},()=>''.padStart(2*(+m),'* ')).join('\n'))