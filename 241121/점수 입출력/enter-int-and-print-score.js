const fs = require('fs');
const score = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log(`Your score is ${score} point.`)