const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

console.log(Math.max(...numbers.filter(v=>v<500)), Math.min(...numbers.filter(v=>v>500)))