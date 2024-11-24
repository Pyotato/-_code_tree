const fs = require('fs');
const num = fs.readFileSync('/dev/stdin').toString().trim();

const [yyyy,mm,dd] = num.split('.');

console.log(`${mm}-${dd}-${yyyy}`);