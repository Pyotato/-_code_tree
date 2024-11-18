const fs = require('fs');
const scores = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>v.split(' ').map(num=>+num));

console.log(scores[0][0] > scores[1][0] && scores[0][1] > scores[1][1] ? 1:0);