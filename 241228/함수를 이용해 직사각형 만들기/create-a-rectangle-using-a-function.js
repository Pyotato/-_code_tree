const fs = require('fs');

const [n,m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(Array.from({length:n},()=>''.padStart(m,'1')).join('\n'));
