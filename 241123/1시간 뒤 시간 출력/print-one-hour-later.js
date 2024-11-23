const fs = require('fs');
const hm = fs.readFileSync('/dev/stdin').toString().trim();

const [h,m] = hm.split(':');

console.log((+h)+1+":"+m);