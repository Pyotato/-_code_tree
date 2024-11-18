const fs = require('fs');
const a = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log(a>=10 && a<=20? 'yes':'no');
