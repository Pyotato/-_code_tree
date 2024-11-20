const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log(((n%3===0 && n%2===1) ||(n%2===0 && n%5===0)).toString());