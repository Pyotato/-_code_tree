const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const starRow = ''.padEnd(n,'*');
const starGrid = Array.from({length:n},()=>starRow).join('\n');

console.log(starGrid+'\n\n'+starGrid);