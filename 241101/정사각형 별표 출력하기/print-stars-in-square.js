const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log(Array.from({length:n},()=> "".padStart(n,'*')).join('\n'))