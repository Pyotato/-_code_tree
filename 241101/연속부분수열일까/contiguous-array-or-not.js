const fs = require('fs');
const [nAnB,A,B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const regex = new RegExp(`${B}`,'g');

console.log(A.match(regex)==null?'No':'Yes');